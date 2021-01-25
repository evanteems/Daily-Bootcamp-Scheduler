$(window).on("load", function () {
 
    // Date & Time Formatted here
    var currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
    $("#DaysOTW").append(currentDate);

    var currentTime = moment().format("H");
    
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

        //Button is clicked the entry will be saved

        
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