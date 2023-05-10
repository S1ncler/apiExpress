import Express from "express";

export const sumar = (req: Express.Request, res: Express.Response): void => {
  let params = req.params;

  if (Number(params.num1) && Number(params.num2)) {
    let sum = parseInt(params.num1) + parseInt(params.num2);
    res
      .status(200)
      .json({ resultado: sum, num1: params.num1, num2: params.num2 });
  } else
    res.status(200).json({
      resultado: "Escriba por favor numeros validos",
      num1: params.num1,
      num2: params.num2,
    });
};
export const restar = (req: Express.Request, res: Express.Response): void => {
  let querys = req.query;
  let num1 = querys.num1;
  let num2: any = querys.num2;
  if (Number(querys.num1) && Number(querys.num2)) {
    let resta = parseInt(num1?.toString() || "") - parseInt(num2);
    res
      .status(200)
      .json({ resultado: resta, num1: querys.num1, num2: querys.num2 });
  } else
    res.status(200).json({
      resultado: "Escriba por favor numeros validos",
      num1: querys.num1,
      num2: querys.num2,
    });
};
export const multiplicar = (
  req: Express.Request,
  res: Express.Response
): void => {
  let body = req.body;
  if (Number(body.num1) && Number(body.num2)) {
    let mult = parseInt(body.num1) * parseInt(body.num2);
    res.status(200).json({ resultado: mult, num1: body.num1, num2: body.num2 });
  } else
    res.status(200).json({
      resultado: "Escriba por favor numeros validos",
      num1: body.num1,
      num2: body.num2,
    });
};
export const dividir = (req: Express.Request, res: Express.Response): void => {
  let params = req.params;
  if (Number(params.num1) && Number(params.num2)) {
    let div = parseInt(params.num1) / parseInt(params.num2);
    res
      .status(200)
      .json({ resultado: div, num1: params.num1, num2: params.num2 });
  } else
    res.status(200).json({
      resultado: "Escriba por favor numeros validos",
      num1: params.num1,
      num2: params.num2,
    });
};
