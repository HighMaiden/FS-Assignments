const timeDiv = document.getElementById("time")


function displayDate(){
    let date= new Date();
    let timeZoneDif = 1 *60;
    let newDate = new Date(date.getTime() + timezoneOffset * 60 * 1000);
    let dateString= newDate.toDateString();
    let timeString = newDate.toTimeString().split(' ')[0];
    let dateTimeString = dateString + ' ' + timeString;
   t=dateTimeString
}
timeDiv.innerText=dateTimeString

      
// Display the date
