import express from 'express';
import cors from 'cors';
// Removi a importação de 'api' pois não é usada no backend.
// import api from './services/api.js';
import { PrismaClient } from './generated/prisma/index.js'; // Verifique se este caminho está correto para o seu projeto
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

// ======================================================
// ROTAS PARA PESSOA
// ======================================================

// ADICIONAR PESSOA
app.post('/usuarios', async (req, res) => {
  try {
    const novaPessoa = await prisma.pessoa.create({
      data: {
        nome: req.body.nome,
        email: req.body.email,
        idade: Number(req.body.idade), // Garante que a idade é um número
        matricula: req.body.matricula,
        curso: req.body.curso,
        periodo: Number(req.body.periodo),
        telefone: req.body.telefone,
        dataInscricao: new Date(req.body.dataInscricao),
      },
    });
    res.status(201).json(novaPessoa);
  } catch (error) {
    console.error("Erro ao criar pessoa:", error);
    res.status(500).json({ error: "Não foi possível criar o usuário." });
  }
});

// VISUALIZAR PESSOAS
app.get('/usuarios', async (req, res) => {
    // A busca com múltiplos `where` opcionais é mais complexa.
    // Uma abordagem simplificada é buscar todos e filtrar no frontend,
    // ou construir o objeto `where` dinamicamente.
    // Por simplicidade, vamos manter a busca geral.
    const pessoas = await prisma.pessoa.findMany();
    res.status(200).json(pessoas);
});

// EDITAR PESSOA
app.put('/usuarios/:id', async (req, res) => {
  try {
    const pessoaAtualizada = await prisma.pessoa.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        nome: req.body.nome,
        email: req.body.email,
        idade: Number(req.body.idade),
        matricula: req.body.matricula,
        curso: req.body.curso,
        periodo: Number(req.body.periodo),
        telefone: req.body.telefone,
        // dataInscricao não precisa ser atualizada geralmente
      },
    });
    res.status(200).json(pessoaAtualizada);
  } catch (error) {
    console.error("Erro ao atualizar pessoa:", error);
    res.status(500).json({ error: "Não foi possível atualizar o usuário." });
  }
});

// DELETAR PESSOA
app.delete('/usuarios/:id', async (req, res) => {
  try {
    await prisma.pessoa.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    console.error("Erro ao deletar pessoa:", error);
    res.status(500).json({ error: "Não foi possível deletar o usuário." });
  }
});


// ======================================================
// ROTAS PARA PLAYER E STAFF
// ======================================================

// Criar Player - CORRIGIDO
app.post('/players', async (req, res) => {
  const { pessoaId, modalidade, role, eloRanking, experiencia, disponibilidade, linkPerfil } = req.body;

  if (!pessoaId) {
      return res.status(400).json({ error: "O campo 'pessoaId' é obrigatório." });
  }

  try {
    const player = await prisma.player.create({
      data: {
        modalidade,
        role,
        eloRanking,
        experiencia,
        disponibilidade,
        linkPerfil,
        // Forma correta de conectar a uma 'pessoa' existente
        pessoa: {
          connect: {
            id: Number(pessoaId),
          },
        },
      },
    });
    res.status(201).json(player);
  } catch (error) {
      console.error("Erro ao criar player:", error);
      res.status(500).json({ error: "Erro ao criar player. Verifique se o pessoaId é válido." });
  }
});

// Criar Staff - CORRIGIDO
app.post('/staffs', async (req, res) => {
  const { pessoaId, areaInteresse, habilidades, experiencia, disponibilidade } = req.body;

  if (!pessoaId) {
      return res.status(400).json({ error: "O campo 'pessoaId' é obrigatório." });
  }

  try {
    const staff = await prisma.staff.create({
      data: {
        areaInteresse,
        habilidades,
        experiencia,
        disponibilidade,
        // Forma correta de conectar a uma 'pessoa' existente
        pessoa: {
          connect: {
            id: Number(pessoaId),
          },
        },
      },
    });
    res.status(201).json(staff);
  } catch (error) {
    console.error("Erro ao criar staff:", error);
    res.status(500).json({ error: "Erro ao criar staff. Verifique se o pessoaId é válido." });
  }
});


// Obter todos os Players com dados da Pessoa
app.get('/players', async (req, res) => {
  const players = await prisma.player.findMany({
    include: { pessoa: true }, // Inclui os dados da pessoa relacionada
  });
  res.status(200).json(players);
});

// Obter todos os Staffs com dados da Pessoa
app.get('/staffs', async (req, res) => {
  const staffs = await prisma.staff.findMany({
    include: { pessoa: true }, // Inclui os dados da pessoa relacionada
  });
  res.status(200).json(staffs);
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
