import Express from "express";

let usuarios = [
  {
    usuario: "S1ncler",
    contraseña: "contraseñaS1ncler",
    email: "s1cler@correo.com",
  },
  {
    usuario: "Philip",
    contraseña: "contraseñaPhilip",
    email: "philip@correo.com",
  },
  {
    usuario: "Dan",
    contraseña: "contraseñaDan",
    email: "dan@correo.com",
  },
  {
    usuario: "Goku",
    contraseña: "contraseñaGoku",
    email: "goku@correo.com",
  },
  {
    usuario: "Pan",
    contraseña: "contraseñaPan",
    email: "Pan@correo.com",
  },
];

export const loggear = (req: Express.Request, res: Express.Response): void => {
  try {
    let datos = req.body;
    for (let usuario of usuarios) {
      if (
        usuario.usuario === datos.usuario &&
        usuario.contraseña === datos.contraseña
      )
        res.status(200).json({ msg: "Sesión iniciada correctamente" });
    }
    res.status(400).json({ msg: "Usuario o contraseña incorrecto" });
  } catch {
    res.status(400).json({ msg: "Bad Request" });
  }
};

export const addUser = (req: Express.Request, res: Express.Response): void => {
  let datos = req.body;
  try {
    if (
      datos.usuario === undefined ||
      datos.usuario === null ||
      datos.usuario === "" ||
      datos.contraseña === undefined ||
      datos.contraseña === null ||
      datos.contraseña === "" ||
      datos.email === undefined ||
      datos.email === null ||
      datos.email === ""
    )
      res.status(400).json({ msg: "Bad Request" });
      
    usuarios.push({
      usuario: datos.usuario,
      contraseña: datos.contraseña,
      email: datos.email,
    });
    res.status(200).json({ msg: "Usuario agregado correctamente" });
  } catch {
    res.status(400).json({ msg: "Bad Request" });
  }
};
