import Express from "express";

export const saludar = (req: Express.Request, res: Express.Response): void => {
  let header = req.headers;
  let body = req.body;
  //let msg = "Hola Michael";
  res.status(200).json({ "body": body, "header": header });
};
export const pregunta = (req: Express.Request, res: Express.Response): void => {
  let request = req;
  let msg = "¿Como estas?";
  res.status(200).json({ msg: msg });
};
export const despedir = (req: Express.Request, res: Express.Response): void => {
  let request = req;
  let msg = "Adios";
  res.status(200).json({ msg: msg });
};
