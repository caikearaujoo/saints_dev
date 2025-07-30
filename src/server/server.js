import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 1. Carregue as variáveis de ambiente PRIMEIRO de tudo
dotenv.config();

// 2. SÓ DEPOIS, importe e instancie o Prisma
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// No seu arquivo server.js

const app = express();

// Configuração de CORS para permitir acesso do seu site na Vercel
const frontendURL = 'https://saints-dev.vercel.app';

app.use(cors({
  origin: frontendURL
}));

// Garanta que esta linha venha DEPOIS da configuração do cors
app.use(express.json());

// ... resto das suas rotas ...
const users = []

//ROTAS PARA PESSOA
//ADICIONAR NO BANCO DE DADOS
//...
app.post('/usuarios', async (req, res) =>{
    // 1. Guarde o resultado da criação em uma variável
    const novaPessoa = await prisma.pessoa.create({
        data: {
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade,
            matricula: req.body.matricula,
            curso: req.body.curso,
            periodo: Number(req.body.periodo),
            telefone: req.body.telefone,
            dataInscricao: new Date(req.body.dataInscricao)
        }
    })

    res.status(201).json(novaPessoa)
})

//VISUALIZAR O BANCO
app.get('/usuarios', async (req, res) => {
    let pessoas = []

    if(req.query){
        pessoas = await prisma.pessoa.findMany({
            where: {
                nome: req.query.nome,
                email: req.query.email,
                idade: Number(req.query.idade),  // convertendo para número
                matricula: req.query.matricula,
                curso: req.query.curso,
                dataInscricao: new Date(req.query.dataInscricao)
            }
        })
    } else {
        pessoas = await prisma.pessoa.findMany()
    }

    res.status(200).json(pessoas)
})

//EDITAR O BANCO
app.put('/usuarios/:id', async (req, res) =>{
    await prisma.pessoa.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade,
            matricula: req.body.matricula,
            curso: req.body.curso,
            periodo: req.body.periodo,
            telefone: req.body.telefone,
            dataInscricao: new Date(req.body.dataInscricao)
        }
    })

    res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.pessoa.delete ({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json({message: " Usuário deletado com sucesso!"})
})

//ROTAS PARA PLAYER E STAFF
// Criar Player
app.post('/players', async (req, res) => {
    try {
        const player = await prisma.player.create({
            data: {
                // Campos do Player
                modalidade: req.body.modalidade,
                role: req.body.role,
                eloRanking: req.body.eloRanking,
                experiencia: req.body.experiencia,
                disponibilidade: req.body.disponibilidade,
                linkPerfil: req.body.linkPerfil,

                // Conectando à Pessoa existente
                pessoa: {
                    connect: {
                        id: Number(req.body.pessoaId)
                    }
                }
            }
        });
        res.status(201).json(player);
    } catch (error) {
        console.error("Erro ao criar player:", error);
        res.status(500).json({ error: "Erro ao criar player." });
    }
});

// Criar Staff
app.post('/staffs', async (req, res) => {
  try {
    const staff = await prisma.staff.create({
      data: {
        pessoaId: Number(req.body.pessoaId),
        areaInteresse: req.body.areaInteresse,
        habilidades: req.body.habilidades,
        experiencia: req.body.experiencia,
        disponibilidade: req.body.disponibilidade
      }
    });

    res.status(201).json(staff);
  } catch (error) {
    console.error("Erro ao criar staff:", error);
    res.status(500).json({ error: "Erro ao criar staff." });
  }
});


app.get('/players', async (req, res) => {
    const players = await prisma.player.findMany({
        include: { pessoa: true }
    });
    res.status(200).json(players);
});

app.get('/staffs', async (req, res) => {
    const staffs = await prisma.staff.findMany({
        include: { pessoa: true }
    });
    res.status(200).json(staffs);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



/*O frontend manda um POST /usuarios → cria a pessoa → retorna o id.

Com o id, o frontend decide:

se quer criar um Player → faz POST /players com o pessoaId.

se quer criar um Staff → faz POST /staffs com o pessoaId.

ou cria ambos.
*/

/*
Lembrar: 
1) Tipo de rota/Método do HTTP
2) Endereço da rota.
*/

/*
Criando a API:
1) Criação de usuários
1) Listagem de usuários
1) Edição de usuários
1) Deleção de usuários
*/