$(document).ready(function () {
    //click listener save button
    $(".saveBtn").on("click", function () {
        console.log(this);
        var value = $(this).siblings("description").val()
        var time = $(this).parent().attr("class");
        console.log(value);
        console.log(time);
        //Set to local storage
        localStorage.setItem(value, time);
    });
    // loads for LocalStorage per hour
    function loadPlanner() {
        $("8t").val(localStorage.getItem("8 am"));
        $("9t").val(localStorage.getItem("9 am"));
        $("10t").val(localStorage.getItem("10 am"));
        $("11t").val(localStorage.getItem("11 am"));
        $("12t").val(localStorage.getItem("12 pm"));
        $("1t").val(localStorage.getItem("1 pm"));
        $("2t").val(localStorage.getItem("2 pm"));
        $("3t").val(localStorage.getItem("3 pm"));
        $("4t").val(localStorage.getItem("4 pm"));
        $("5t").val(localStorage.getItem("5 pm"));
        $("6t").val(localStorage.getItem("6 pm"));
        $("7t").val(localStorage.getItem("7 pm"));
        $("8t").val(localStorage.getItem("8 pm"));
        $("9t").val(localStorage.getItem("9 pm"));

    }
    loadPlanner();
    // Get current hour
    function hourTracker() {
        var currentHour = moment().hours()
    }
    function changeColor() {
        var now = moment().hour();
    }
    // time block loops
    $(".timeblock").each(function () {
        var blockHour = parseInt($(this).attr("class").split("hour")[1]);
        console.log(blockHour, currentHour)
        console.log($(this).siblings("textarea"));
        // determins if this time has passed
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }

        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }

    })
    changeColor();

    hourTracker();
    // load save data from LocalStorage so its still there on a new page 
    $("add").click(function () {
        localStorage.add();
        location.reload()
    });
    // Shows current Day
    $("#currentDay").text(moment().format("dddd,MMM Do YYYY"));
});
