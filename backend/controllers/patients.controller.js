// const { getStudentByIdService } = require('../services/students.service');
const prisma = require("../../config/prisma.client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  const { patientId } = req.params;
  const patient = await prisma.patient.findUnique({
    where: { id: parseInt(patientId) },
  });
  return res.json(patient);
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
  const patientId = parseInt(req.params["id"]);
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
  const patientId = parseInt(req.params["id"]);
  const deletedPatient = await prisma.patient.delete({
    where: {
      id: patientId,
    },
  });
  res.json(deletedPatient);
};

const registerPatient = async (req, res) => {
  try {
    const {
      name,
      lastname,
      email,
      password,
      age,
      address,
      condition,
      telephoneNumber,
      therapistId,
    } = req.body;
    const existsEmail = await prisma.patient.findUnique({
      where: { email: email },
    });
    if (existsEmail) {
      return res
        .status(400)
        .json({ error: "There is a patient with that email!" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const patient = await prisma.patient.create({
      data: {
        name,
        lastname,
        email,
        password: hashedPassword,
        age: parseInt(age),
        address,
        condition,
        telephoneNumber,
        therapist: { connect: { id: parseInt(therapistId) } },
      },
      select: {
        name: true,
        email: true,
      },
    });
    res.json(patient);
  } catch (error) {
    console.log(error);
  }
};
const loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;
    const patient = await prisma.patient.findUnique({ where: { email } });
    if (!patient)
      res.json({ error: "There isn't any patient with that email!" });
    const validPassword = await bcrypt.compare(password, patient.password);
    if (!validPassword) res.json({ error: "This is an invalid password!" });
    const token = jwt.sign(
      {
        email: patient.email,
        id: patient.id,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "8h" }
    );
    res.json({
      data: { token },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
  registerPatient,
  loginPatient,
};
