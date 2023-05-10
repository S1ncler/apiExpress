import express from "express";
import ApiRoutes from "./routes/index"

const app = express();
const port = 3000;

//app.get("/ruta", middleware, funcion);

//app.get("/api", (req: express.Request, res: express.Response) => {
//  res.status(200).json({
//    saludo: "hello this is my api crazy man!",
//  });
//});

// importar todas las rutas existentes
// indicar a express que entienda el formato json
app.use(express.json())
app.use("/api", ApiRoutes)

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})
