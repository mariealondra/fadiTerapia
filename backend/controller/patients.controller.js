const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// const { getStudentByIdService } = require('../services/students.service');
const getPatients = async (req, res) => {
  const patients = await prisma.patient.findMany({
    include: {
      therapist: true,
      exercises: true,
    },
  });
  res.json(patients);
};
const getPatientById = async (req, res) => {
  const patientId = parseInt(req.params['id']);
  const patient = await prisma.patient.findUnique({ where: { id: patientId } });
  res.json(patient);
};
const createPatient = async (req, res) => {
  const { name, email, password, therapistId } = req.body;
  const createdPatient = await prisma.patient.create({
    data: {
      name,
      email,
      password,
      therapist: {
        connect: {
          id: parseInt(therapistId),
        },
      },
    },
  });
  res.json(createdPatient);
};
const updatePatient = async (req, res) => {
  const patientId = parseInt(req.params['id']);
  const { name } = req.body;
  const updatedPatient = await prisma.patient.update({
    where: {
      id: patientId,
    },
    data: {
      name,
    },
  });
  res.json(updatedPatient);
};
const deletePatient = async (req, res) => {
  const patientId = parseInt(req.params['id']);
  const deletedPatient = await prisma.patient.delete({
    where: {
      id: patientId,
    },
  });
  res.json(deletedPatient);
};
module.exports = {
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
};