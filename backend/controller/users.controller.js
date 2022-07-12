const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const { getUserByIdService } = require('../services/users.service');

const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

const getuserById = async (req, res) => {
  const userId = parseInt(req.params['id']);
  const user = await getUserByIdService(userId);
  res.json(user);
};

const createUser = async (req, res) => {
  const { name, email, career } = req.body;

  const createdUser = await prisma.user.create({
    data: {
      nombre,
      email: new Date(birthDate),
      passw
    },
  });

  res.json(createdUser);
};

const updateUser = async (req, res) => {
  const userId = parseInt(req.params['id']);

  const { nombre, email, passw, } = req.body;

  const createdUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
      birthDate: new Date(birthDate),
      career,
    },
  });

  res.json(createdUser);
};

const deleteUser = async (req, res) => {
  const userId = parseInt(req.params['id']);
  const deletedUser = await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  res.json(deletedUser);
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
