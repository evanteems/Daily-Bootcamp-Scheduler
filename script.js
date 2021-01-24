$(window).on("load", function () {
 
    // use moment to get the date/time in nice format
    var currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
    $("#DaysOTW").append(currentDate);

    var currentTime = moment().format("H");
    
    // calling the fields by whole time, ie. 9, 10, 11 in order
    // to make it easier to loop around it

    // loop through all the times to determine if past, present, future
    // use existing CSS to define what they are color coded by grey,red, green
    for (i = 9; i <= 18; i++) {


        var CurrentContainer = i;
        // Time Matches here
        if (currentTime == i) {
            // DIV ID set here
            $('#' + CurrentContainer).addClass("Pre");

            // set the TEXTAREA to the right color
            $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("Pre");
            
        }

        
        else if (currentTime > i) {
            $('#' + CurrentContainer).addClass("Pas");
            $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("Pas");
        }

    
        else if (currentTime < i) {
            $('#' + CurrentContainer).addClass("Post");
            $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("Post");
        }

    }

    $("button").on("click", function() {

        //The entry is saved when the buttoon is clicked
        //Fields all in local storage
        
        for(i=9; i<= 17; i++) {

            var CurrentContainer = i;
            localStorage.setItem(i + "am", ($('#' + i).children('div').children('div').children("textarea").val()));

        }

    })

    // Local Storage Retrived
    for(i=9; i<= 17; i++) {

        var CurrentContainer = i;
        $('#' + i).children('div').children('div').children("textarea").append(localStorage.getItem(i + "am"));
    }

})