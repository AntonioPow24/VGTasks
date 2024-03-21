
//FORMATO DE FECHA ISO A STRING
export const formatDateString = value => {
    const dateParts = value.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);
  
    const date = new Date(year, month - 1, day); // Restar 1 al mes porque en JavaScript los meses van de 0 a 11
  
    // Array de nombres de los meses
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
    // Obtener el nombre del mes y formatear el día
    const monthName = monthNames[date.getMonth()];
    const formattedDay = day < 10 ? `0${day}` : day;
  
    return `${monthName} ${formattedDay}`;
  }



// FORMATO DE HORA ISO A STRING
export const formatTimeString = value => {
  const timeParts = value.split(':');
  let hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);

  // Determinar si es AM o PM
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  // Convertir la hora al formato de 12 horas
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  // Formatear las horas y los minutos
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
}



//FORMATO DE FECHA STRING A ISO
export const formatDateToISO = dateString => {
  // Array de nombres de los meses
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // Separar la fecha en mes y día
  const [monthName, dayString] = dateString.split(' ');

  // Encontrar el índice del mes en el array de nombres de los meses
  const monthIndex = monthNames.findIndex(month => month === monthName);

  // Obtener el día como número
  const day = parseInt(dayString);

  // Crear un objeto Date con el año actual, el índice del mes y el día
  const date = new Date(new Date().getFullYear(), monthIndex, day);

  // Obtener la fecha en formato ISO (YYYY-MM-DD)
  const isoDateString = date.toISOString().split('T')[0];

  return isoDateString;
};


//FORMATO DE HORA STRING A ISO
export const formatTimeToISO = timeString => {
// Dividir la cadena de tiempo en partes
const [time, period] = timeString.split(' ');

// Dividir la parte de tiempo en horas y minutos
const [hoursStr, minutesStr] = time.split(':');
let hours = parseInt(hoursStr);
const minutes = parseInt(minutesStr);

// Convertir a formato de 24 horas si es PM y no es medianoche
if (period === 'PM' && hours !== 12) {
  hours += 12;
}

// Ajustar la medianoche a 00:00
if (period === 'AM' && hours === 12) {
  hours = 0;
}

// Formatear la hora y los minutos con ceros a la izquierda si es necesario
const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

// Devolver la hora en formato ISO
return `${formattedHours}:${formattedMinutes}`;
}