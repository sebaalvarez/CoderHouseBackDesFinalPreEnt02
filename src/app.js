import express, { urlencoded } from "express";
import exphbs from "express-handlebars";
import mongoose from "mongoose";
import _dirname from "./utils.js";

import productRoutes from "./routes/products.routes.js";
import cartRoutes from "./routes/carts.routes.js";
import viewsRouter from "./routes/views.router.js";
import path from "path";

const app = express();
const PORT = 8080;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(_dirname, "public")));

// motor de plantillas
app.set("views", path.join(_dirname, "views"));

app.engine(
  ".hbs",
  exphbs.engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

// endpoints
app.use("/", viewsRouter);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);

const httpServer = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/ecommerce?retryWrites=true&w=majority"
    );
    console.log("Conectado con exito a MongoDB usando Moongose.");

    /*let nuevoEstudiante = await studentsModel.create({
            name: "Luis",
            lastName : "Munar",
            age : "20",
        });*/

    /*let nuevoCurso = await coursesModel.create(
            {
                title: "Curso Backend",
                description: "Curso backend de NodeJS",
                teacherName: "Juan Torres"
            }
        );*/

    // let student = await studentsModel.findOne({
    //   _id: "640a705f72d18c48ca6f6741",
    // });
    // console.log(JSON.stringify(student, null, "\t"));

    //student.courses.push({course: "640a719de27c256369c70d15"});
    //console.log(JSON.stringify(student));

    //let result = await studentsModel.updateOne(student);
    //console.log(result);
  } catch (error) {
    console.error("No se pudo conectar a la BD usando Moongose: " + error);
    process.exit();
  }
};
connectMongoDB();
