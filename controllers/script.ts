export function leerExcel() {
  const XLSX = require("xlsx");
  const ruta = "../bdProyecto.xlsx";
  const workbook = XLSX.readFile(ruta);
  const sheets: string[] = workbook.SheetNames;
  return sheets;
}
