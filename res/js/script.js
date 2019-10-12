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

    $("#add-course-button").click(function () {
        $("#add-course").toggle();
    });

    $("#cancel-course").click(function () {
        $("#title").val('');
        $("#semester").val('');
        $("#grade").val('');
        $("#add-course").toggle();
    });

    $("#save-course").click(function () {
        let title = $("#title").val();
        let semester = $("#semester").val();
        let grade = $("#grade").val();

        if (title !== "" && semester !== "" && grade !== "" && semester >= 1 && grade >= 0) {
            let course = new Course(title, parseInt(semester), parseInt(grade));
            addCourse(course);
            courses.push(course);
            $("#title").val('');
            $("#semester").val('');
            $("#grade").val('');
            $("#add-course").toggle();
        }
        refreshGPA();
    });

    function calculateGPA() {
        let points = 0;
        
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].grade > 90)
                points += 4;
            else if (courses[i].grade > 80)
                points += 3;
            else if (courses[i].grade > 70)
                points += 2;
            else if (courses[i].grade > 60)
                points += 1;
            else if (courses[i].grade > 50)
                points += 0.5;
        }
        
        return points / courses.length;
    }

    function refreshGPA() {
        $("#gpa strong").text(Math.round(calculateGPA()*1000)/1000)
    }


    function addCourse(course) {
        let courses_table = $("#courses tbody");
        let tr_course = $("<tr></tr>");
        let td_id = $("<td></td>").text(courses_table.children().length + 1);
        let td_title = $("<td></td>").text(course.title);
        let td_semester = $("<td></td>").text(course.semester);
        let td_grade = $("<td></td>").text(course.grade);
        tr_course.append(td_id,td_title,td_semester,td_grade);
        courses_table.append(tr_course);
    }

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
        let strong_gpa = $("<strong></strong>").text(calculateGPA());
        div_gpa.append(strong_gpa);
        $("#profile .avatar").after(div_info,div_gpa); //Adding the created html after the avatar class in profile

        //Setting up the course information table dynamically
        for (let i = 0; i < courses.length; i++) {
            addCourse(courses[i])
        }
    }
});