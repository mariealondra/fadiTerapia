const prisma = require("../../config/prisma.client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerTherapist = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existsEmail = await prisma.therapist.findUnique({
      where: { email: email },
    });
    if (existsEmail) {
      return res
        .status(400)
        .json({ error: "There is a therapist with that email!" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const therapist = await prisma.therapist.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
      select: {
        name: true,
        email: true,
      },
    });
    res.json(therapist);
  } catch (error) {
    console.log(error);
  }
};
const loginTherapist = async (req, res) => {
  try {
    const { email, password } = req.body;
    const therapist = await prisma.therapist.findUnique({ where: { email } });
    if (!therapist)
      res.json({ error: "There isn't any therapist with that email!" });
    const validPassword = await bcrypt.compare(password, therapist.password);
    if (!validPassword) res.json({ error: "This is an invalid password!" });
    const token = jwt.sign(
      {
        email: therapist.email,
        id: therapist.id,
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
  registerTherapist,
  loginTherapist,
};
