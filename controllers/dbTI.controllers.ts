import Express from "express";
const XLSX = require("xlsx");

export const getProducts = (
  req: Express.Request,
  res: Express.Response
): void => {
  const productos = leerExcel();
  res.status(200).json(productos);
  console.log("atendi una peticion");
};

export const getRandomProducts = (
  req: Express.Request,
  res: Express.Response
): void => {
  const productos: any = leerExcel();
  const productosMostrar: JSON[] = [];
  let cantidad: any = 10;

  if (req.query.cantidad != undefined) cantidad = req.query.cantidad;

  if (req.query.marca != undefined) {
    for (let i = 0; i < cantidad; i++)
      productosMostrar.push(
        productos[Math.floor(Math.random() * productos.length)]
      );
    res.status(200).json({
      msg: `Deberia enviar 10 productos random de ${req.query.marca}`,
    });
  }
  if (
    req.query.categoria != undefined &&
    leerExcel(true).includes(req.query.categoria)
  ) {
    for (let i = 0; i < cantidad; i++) {
      let num = Math.floor(Math.random() * productos.length);
      if (productos[num].categoria == req.query.categoria)
        productosMostrar.push(productos[num]);
      else i--;
    }
    res.status(200).json(productosMostrar);
  } else if (!leerExcel(true).includes(req.query.categoria))
    res.status(400).json({ msg: "bad request" });
    
  for (let i = 0; i < cantidad; i++)
    productosMostrar.push(
      productos[Math.floor(Math.random() * productos.length)]
    );

  res.status(200).json(productosMostrar);

  console.log("atendi una peticion");
};

export const getMarcas = (
  req: Express.Request,
  res: Express.Response
): void => {
  const productos: any = leerExcel();
  const marcas: string[] = [];
  let cantidad: any = 1000;

  if (req.query.cantidad != undefined) cantidad = req.query.cantidad;

  for (let producto of productos) {
    if (marcas.length >= cantidad) break;
    if (!marcas.includes(producto.marca)) marcas.push(producto.marca);
  }
  res.status(200).json(marcas);

  console.log("atendi una peticion");
};

export const getCategorias = (
  req: Express.Request,
  res: Express.Response
): void => {
  res.status(200).json(leerExcel(true));

  console.log("atendi una peticion");
};

function leerExcel(cat: boolean = false) {
  const workbook = XLSX.readFile("bdProyecto.xlsx");
  const data: any = {};
  const productos: JSON[] = [];

  if (cat) return workbook.SheetNames;

  // recorre cada hoja del archivo
  workbook.SheetNames.forEach((sheetName: any) => {
    // obtiene la hoja actual
    const worksheet = workbook.Sheets[sheetName];
    // convierte la hoja a un objeto JSON
    data[sheetName] = XLSX.utils.sheet_to_json(worksheet);
  });
  let categorias = Object.keys(data);
  for (let i in data) {
    data[i].forEach((producto: any) => {
      producto.image = producto.image.replace(/\[|\]|"/g, "").split(",");
      producto["categoria"] = categorias[categorias.indexOf(i)];
      productos.push(producto);
    });
  }
  return productos;
}
