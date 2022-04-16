var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var nowEl = document.getElementById("currentDay");
nowEl.innerText = now

var time = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var tempHour = new Date()
console.log(tempHour.toLocaleString('en-US', { hour: 'numeric', hour12: true }))
// var hour =



