// add a event listener on our buttons
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // get the values of the time and description
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id")

        //save to local storage
        localStorage.setItem(time, value);
    })


    // create function that updates hour
    function hourUpdater() {
        //get the current number of hours using moment()
        var currentHour = moment().hours;
        var totalTimeBlock = $(".total-block").length;

        //loop through the time blocks
        for (let i = 0; i < totalTimeBlock; i++) {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            // check if the current hour is greater than our previous hour then add a class called past, if block is equal to currentHour then remove past class and add present class
            // else remove past class, present class and add future class. 
            if (blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");

            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
        }
    }

    hourUpdater();

    // set the interval
    var interval = setInterval(hourUpdater, 15000);

    //  load the data from the localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));

    // display the current day on the page. 
    $("#currentDay").text(moment().format("dddd, MMM Do"));


})