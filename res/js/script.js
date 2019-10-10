$(function () {
    //Create the User object
    var user = new User("Joe","Doe","11/10/2000","Software Engineering");

    //Create an array of Courses
    var courses = [
        new Course("Agile software development",1,82),
        new Course("System modeling",1,85),
        new Course("Object-priented programming", 2, 99),
        new Course("Estonian language level A2", 2, 65),
    ];


    //Calling Initialization function
    init();

    //Adding the functionality to tab changing buttons
    $("#profile-button").click(function (event){
        $("#profile-container").attr("class","tab active");
        $("#courses-container").attr("class","tab");
        $("#profile-button").attr("class","pill active");
        $("#courses-button").attr("class","pill");
    });

    $("#courses-button").click(function (event){
        $("#profile-container").attr("class","tab");
        $("#courses-container").attr("class","tab active");
        $("#profile-button").attr("class","pill");
        $("#courses-button").attr("class","pill active");
    });


    //Initialization function
    function init() {
        //Work in progress
    }
});