export function getDateString(date) {
  // Get year, month, and day
  const year = date.getFullYear();
  // Add 1 to the month because getMonth() returns 0-based index (0 for January, 1 for February, etc.)
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  // Construct the yyyy-mm-dd format
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
