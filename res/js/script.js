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
    $("#profile-button").click(function (){
        $("#profile-container").attr("class","tab active");
        $("#courses-container").attr("class","tab");
        $("#profile-button").attr("class","pill active");
        $("#courses-button").attr("class","pill");
    });

    $("#courses-button").click(function (){
        $("#profile-container").attr("class","tab");
        $("#courses-container").attr("class","tab active");
        $("#profile-button").attr("class","pill");
        $("#courses-button").attr("class","pill active");
    });

    //Initialization function
    function init() {
        //Setting up the user information dynamically [I don't really know how far we have to do it dynamically, so I did it a medium amount] (excluding gpa)
        let div_info = $("<div></div>").addClass("info");
        let ul_profile = $("<ul></ul>");
        let li_name = $("<li></li>").attr("id","name").text(user.firstname + " " + user.lastname);
        let li_birthdate = $("<li></li>").attr("id","birthdate").text(user.birthdate);
        let li_faculty = $("<li></li>").attr("id","birthdate").text(user.faculty);
        ul_profile.append(li_name,li_birthdate,li_faculty);
        div_info.append(ul_profile);

        //Setting up the gpa dynamically(user gpa should probably be calculated before this)
        let div_gpa = $("<div></div>").attr("id","gpa");
        let strong_gpa = $("<strong></strong>").text(user.gpa);
        div_gpa.append(strong_gpa);
        $("#profile .avatar").after(div_info,div_gpa); //Adding the created html after the avatar class in profile

        //Setting up the course information table dynamically
        for (let i = 1; i <= courses.length; i++) {
            let tr_course = $("<tr></tr>");
            let td_id = $("<td></td>").text(i);
            let td_title = $("<td></td>").text(courses[i-1].title);
            let td_semester = $("<td></td>").text(courses[i-1].semester);
            let td_grade = $("<td></td>").text(courses[i-1].grade);
            tr_course.append(td_id,td_title,td_semester,td_grade);
            $("#courses").append(tr_course);
        }
        }
});