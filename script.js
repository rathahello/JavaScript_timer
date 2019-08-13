var display = () => {
    var days = new Date();
    var day = days.getDay();
    var date = days.getDate().toString();
    var months = days.getMonth();
    var year = days.getFullYear();
    var displayDay = " ";
    var displayMonth = " ";
    var displayDate = " ";
    var month = ['January', 'february', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];
    var array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'Saturday'];
    //days
    for (let i = 0; i < array.length; i++) {
        switch (day) {
            case i:
                displayDay = array[i];
                break;
        }
    }
    //dates
    if (date.length < 2) {
        date = "0" + date;
    }
    switch (date) {
        case 1:
        case 21:
        case 31:
            displayDate = "st";
            break
        case 2:
        case 22:
            displayDate = "nd";
            break;
        case 3:
        case 23:
            displayDate = "rd";
            break;
        default:
            displayDate = "th";
    }

    //years
    if (year.length < 2) {
        year = year;
    }

    //months

    for (let j = 0; j < month.length; j++) {
        switch (months) {
            case j:
                displayMonth = month[j];
                break;
        }
    }
    document.querySelector('h1').innerHTML = displayDay + " " + date +
        "<sup>" + displayDate + "</sup>" + " " + displayMonth + " " + year;
}
var changColor = () =>{
    let dateColor = document.querySelector('h1');
    if(dateColor.style.color == "teal"){
        dateColor.style.color = "pink";
    }else {
        dateColor.style.color = "teal";
    }
}
display();
setInterval(changColor, 1000);

//timer
var displayTime = () => {
    var time = new Date();
    var hours = (time.getHours() % 12).toString();
    var minute = time.getMinutes().toString();
    var second = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (minute.length < 2) {
        minute = "0" + minute;
    }
    if (second.length < 2) {
        second = "0" + second;
    }
    if (time.getHours() === 12) {
        time = "0" + time;
    }
    if (hours.length < 12) {
        document.querySelector('h2').innerHTML = hours + ":" + minute + ":" + second + " AM ";
    } else {
        document.querySelector('h2').innerHTML = hours + ":" + minute + ":" + second + " PM ";
    }
}
//changcolor timer
var changTime = () =>{
    let colorTime = document.querySelector('h2');
    if(colorTime.style.color == "teal"){
        colorTime.style.color = "pink";
    }else {
        colorTime.style.color = "teal";
    }
}
setInterval(displayTime,changTime, 1000);



