export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const getDateFromEpoch = utcSeconds => {
  let d = new Date(utcSeconds);
  return d.toUTCString();
};

export function formatDate(utcSeconds) {
  let date = new Date(utcSeconds);
  let month = date.getMonth();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let year = date.getFullYear();

  month = (month + 1).toString();
  year = year.toString().substr(-2);
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + ampm;
  return month + "/" + date.getDate() + "/" + year + " @ " + strTime;
}
