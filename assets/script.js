var nowEl = $("#currentDay");
var now = "";

setInterval(function () {
  now = moment().format("MM/DD/YYYY [at] HH:mm:ss a");
  nowEl.text(now);
}, 1000);

var time = [
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
];
var tempHour = new Date();
var currentHour = tempHour.toLocaleString("en-US", {
  hour: "numeric",
  hour12: true,
});

var index = time.indexOf(currentHour);

// for (let i = 0; i < time.length; i++) {
//   if (i < index) {
//     $("textarea").removeClass("future present")
//     $("textarea").addClass("past")
//   } 

//   else if (i > index) {
//     console.log(i > index)
//     console.log(time[i]);
//     $("textarea").removeClass("past present")
//     $("textarea").addClass("future")
//   } 
  
//   else {
//       $("textarea").removeClass("future past")
//       $("textarea").addClass("present")
      
//   }
// }

$(".row").each(function(i){
    if (i < index) {
      $(this).children("textarea").removeClass("future present")
      $(this).children("textarea").addClass("past")
    }
    console.log(this)
    console.log($(".row"))
})

$(".btn-save").on("click", save)

function save() {
$("textarea").each(function(i){
    localStorage.setItem(i, this.value)
    console.log(this)
})
}

function getItem(){
    $("textarea").each(function(i){
        var saveText = localStorage.getItem(i)
        console.log($(this))
        $(this).text(saveText)
    })
}

getItem();

