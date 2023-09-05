import moment from "moment";

// Obtén la fecha y hora actual en el formato ISO 8601
export const currentDate = moment().format("YYYY-MM-DDTHH:mm:ssZ");

// Calcula la fecha del día siguiente
export const nextday = moment(currentDate).add(1, "days").format("YYYY-MM-DD");

// Obtén el nombre del día de la semana actual
export const today = moment(currentDate).format("dddd");

// Obtén el nombre del día de la semana para el día siguiente
export const tomorrow = moment(nextday).format("dddd");
