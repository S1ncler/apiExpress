import Express from "express";
const XLSX = require("xlsx");

export const getProducts = (
  req: Express.Request,
  res: Express.Response
): void => {
  const workbook = XLSX.readFile("bdProyecto.xlsx");
  const data: any = {};
  // recorre cada hoja del archivo
  workbook.SheetNames.forEach((sheetName: any) => {
    // obtiene la hoja actual
    const worksheet = workbook.Sheets[sheetName];
    // convierte la hoja a un objeto JSON
    data[sheetName] = XLSX.utils.sheet_to_json(worksheet);
  });

  // envía los datos como respuesta
  res.status(200).json(data);

  console.log("atendi una peticion");
};

export const get10RandomProducts = (
  req: Express.Request,
  res: Express.Response
): void => {
  const workbook = XLSX.readFile("bdProyecto.xlsx");
  const data: any = {};
  const productos: JSON[] = [];
  const productosMostrar: JSON[] = [];
  // recorre cada hoja del archivo
  workbook.SheetNames.forEach((sheetName: any) => {
    // obtiene la hoja actual
    const worksheet = workbook.Sheets[sheetName];
    // convierte la hoja a un objeto JSON
    data[sheetName] = XLSX.utils.sheet_to_json(worksheet);
  });
  for (let i in data) {
    data[i].forEach((producto: any) => {
      producto.image = producto.image.replace(/\[|\]|"/g, "").split(",");
      productos.push(producto);
    });
  }
  for (let i = 0; i < 10; i++)
    productosMostrar.push(productos[Math.floor(Math.random() * productos.length)]);

  res.status(200).json(productosMostrar);

  console.log("atendi una peticion");
};

export const getMarcas = (
  req: Express.Request,
  res: Express.Response
): void => {
  const workbook = XLSX.readFile("bdProyecto.xlsx");
  const data: any = {};
  const marcas: string[] = [];
  // recorre cada hoja del archivo
  workbook.SheetNames.forEach((sheetName: any) => {
    // obtiene la hoja actual
    const worksheet = workbook.Sheets[sheetName];
    // convierte la hoja a un objeto JSON
    data[sheetName] = XLSX.utils.sheet_to_json(worksheet);
  });
  for (let i in data) {
    data[i].forEach((producto: any) => {
      if (!marcas.includes(producto.marca)) marcas.push(producto.marca);
    });
  }
  res.status(200).json(marcas);

  console.log("atendi una peticion");
};

export const getCategorias = (
  req: Express.Request,
  res: Express.Response
): void => {
  const workbook = XLSX.readFile("bdProyecto.xlsx");
  
  res.status(200).json(workbook.SheetNames);

  console.log("atendi una peticion");
};
