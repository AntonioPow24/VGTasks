export default function orderByMonth(arreglo) {
    // Función para convertir la fecha de cadena a objeto de fecha
    const convertirFecha = fecha => {
      const [mes, dia] = fecha.split(" ");
      const meses = {
        "Enero": 0, "Febrero": 1, "Marzo": 2, "Abril": 3, "Mayo": 4, "Junio": 5,
        "Julio": 6, "Agosto": 7, "Septiembre": 8, "Octubre": 9, "Noviembre": 10, "Diciembre": 11
      };
      return new Date(new Date().getFullYear(), meses[mes], parseInt(dia));
    };
  
    // Ordenar el arreglo por fecha
    return arreglo.sort((a, b) => {
      const fechaA = convertirFecha(a.date);
      const fechaB = convertirFecha(b.date);
      return fechaA - fechaB;
    });
  }
  