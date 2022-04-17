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

// Current Time
var tempHour = new Date();
// Current time in hour
var currentHour = tempHour.toLocaleString("en-US", {
  hour: "numeric",
  hour12: true,
});
// Index of variable "time" and put it into variable of currentHour
var index = time.indexOf(currentHour);

// Past 
$(".row").each(function (i) {
  if (i < index) {
    $(this).children("textarea").removeClass("future present");
    $(this).children("textarea").addClass("past");
  }
  console.log(this);
  console.log($(".row"));
});

// Future
$(".row").each(function (i) {
  if (i > index) {
    $(this).children("textarea").removeClass("past present");
    $(this).children("textarea").addClass("future");
  }
});

// Present
$(".row").each(function (i) {
  if (i == index) {
    $(this).children("textarea").removeClass("future past");
    $(this).children("textarea").addClass("present");
  }
});

// When the save button is clicked
$(".btn-save").on("click", save);

// Save in local Storage
function save() {
  $("textarea").each(function (i) {
    localStorage.setItem(i, this.value);
    console.log(this);
  });
}

// Get item from local storage
function getItem() {
  $("textarea").each(function (i) {
    var saveText = localStorage.getItem(i);
    console.log($(this));
    $(this).text(saveText);
  });
}

getItem();
