import moment from "moment"

const dateFormat = (dateRaw : string | number) : string => {
  const months = [["01", "January", "Jan"], ["02", "February", "Feb"], ["03", "March", "Mar"], ["04", "April", "Apr"], ["05", "May", "May"], ["06", "June", "Jun"], ["07", "July", "Jul"], ["08", "August", "Aug"], ["09", "September", "Sep"], ["10", "October", "Oct"], ["11", "November", "Nov"], ["12", "December", "Dec"]]
  const days = [["00", "Sunday", "Sun"], ["01", "Monday", "Mon"], ["02", "Tuesday", "Tue"], ["03", "Wednesday", "Wed"], ["04", "Thursday", "Thu"], ["05", "Friday", "Fri"], ["06", "Saturday", "Sat"]]

  let dateString: string | number = '';
  if (typeof dateRaw === "string"){
    dateString = `${dateRaw}T00:00:00Z`;
  }
  else if (typeof dateRaw === "number"){
    dateString = dateRaw * 1000;
  }

  // offset timezone from dateString
  const dateObj = moment(dateString).utcOffset(0)
  const month = dateObj.month();
  let date = dateObj.date().toString();
  date = ("0" + date).slice(-2);

  const day = dateObj.day();
  
  const dateParsed = `${months[month][0]} / ${date}`;
  
  return `${dateParsed} ${days[day][2]}`;
}

export default dateFormat