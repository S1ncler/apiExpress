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
  let datos = req.body;
  console.log(req.body)
  try {
    for (let usuario of usuarios) {
        //xxconsole.log(usuario.usuario, datos.usuario, usuario.contraseña, datos.contraseña)
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
