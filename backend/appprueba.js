const express = require("express"); //Importar express

const { get } = require("./rutas/patients.routes");
const app = express(); //Instanciamos express
const PatientsRouter = require("./rutas/patients.routes");
const TherapistRouter = require("./rutas/therapist.routes");
const SensorRouter = require("./rutas/sensor.routes");
const ExerciseExecutionRouter = require("./rutas/exerciseExecution.routes");
const morgan = require("morgan");

const cors = require("cors");
app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //Para que en los métodos en que se recibe un body express parsee tipo JSON y tipo form

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hola");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("application/json");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
});

app.use(PatientsRouter);
app.use(TherapistRouter);
app.use(SensorRouter);
app.use(ExerciseExecutionRouter);

PatientsRouter.post("../screen/Login", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  res.end("yes");
});

app.listen(3001, () => {
  console.log("Escuchando en el puerto 3001");
});
