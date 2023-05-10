import Express from "express";
import * as excel from "./script";
const XLSX = require("xlsx");

export const getProducts = (
  req: Express.Request,
  res: Express.Response
): void => {
  const workbook = XLSX.readFile("bdProyecto.xlsx");
  const data:any = {};
  // recorre cada hoja del archivo
  workbook.SheetNames.forEach((sheetName: any) => {
    // obtiene la hoja actual
    const worksheet = workbook.Sheets[sheetName];
    // convierte la hoja a un objeto JSON
    data[sheetName] = XLSX.utils.sheet_to_json(worksheet);
  });

  // envía los datos como respuesta
  res.status(200).json(data);

  console.log("atendi una peticion")
};
