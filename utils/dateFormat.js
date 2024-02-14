export function getDateInFormat() {
  let today = new Date();

  let day = today.getDate();
  if (day < 10) {
    day = "0" + today.getDate();
  }

  let month = today.getMonth() + 1;
  if (month < 10) {
    month = "0" + (today.getMonth() + 1);
  }

  const year = today.getFullYear();

  let hour = today.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }

  let minute = today.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }

  return day + "." + month + "." + year + "-" + hour + ":" + minute;
}
