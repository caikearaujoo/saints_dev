import express from 'express'
import { PrismaClient } from './generated/prisma/index.js'
const prisma = new PrismaClient()

const app = express()
app.use(express.json())
const users = []

//ROTAS PARA PESSOA
//ADICIONAR NO BANCO DE DADOS
app.post('/usuarios', async (req, res) =>{
    await prisma.pessoa.create({
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
            id: req.params.id
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
            id: req.params.id
        }
    })

    res.status(200).json({message: " Usuário deletado com sucesso!"})
})

//ROTAS PARA PLAYER E STAFF
// Criar Player
app.post('/players', async (req, res) => {
    const player = await prisma.player.create({
        data: {
            pessoaId: Number(req.body.pessoaId),
            modalidade: req.body.modalidade,
            role: req.body.role,
            eloRanking: req.body.eloRanking,
            experiencia: req.body.experiencia,
            disponibilidade: req.body.disponibilidade,
            linkPerfil: req.body.linkPerfil
        }
    });
    res.status(201).json(player);
});

// Criar Staff
app.post('/staffs', async (req, res) => {
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

app.listen(3000);


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