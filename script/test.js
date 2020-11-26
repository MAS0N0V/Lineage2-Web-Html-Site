/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    showHideMenu();
    $("#register-btn").click(function () {
        $("#container").load("register-form.html")
    });
    $("#login-btn").click(() => {
        $("#container").load("login-form.html");
    });
    $("#home").click(() => {
        $("#container").empty();
        if (isLoggedIn())
            $("#container").text("Hello " + sessionStorage.getItem("username"))
        else{
            $("#container").text("Please register")
        }
    })
    $("#logout").click(() => {
        // $.ajax({
        //     url:BASE_URL + "user/" + APP_KEY + "/_logout",
        //     method:"POST",
        //     headers:HEADERS_KINVEY
        // })
        sessionStorage.removeItem("username")
        showHideMenu()
    });
    $("#add-book").click(addBookBtn);

    $(document).on("click", "#register", register);
    $(document).on("click", "#login", login);
});

function register(e) {
    e.preventDefault();

    let username = $("#reg-username").val();
    let password = $("#reg-password").val();
    let firstName = $("#reg-firstname").val();
    let lastName = $("#reg-lastname").val();

    let data = {
        username: username,
        password: btoa(password),
        firstName: firstName,
        familiq: lastName
    };

    registerAjax(data);
}

function login(e) {
    e.preventDefault()
    let username = $("#login-username").val();
    let password = btoa($("#login-password").val());
    let data = {
        username: username,
        password: password
    };

    loginAjax(data).then(function (response) {
        sessionStorage.setItem("username", response.username);
        showHideMenu();
    })
}

function isLoggedIn() {
    return sessionStorage.getItem("username");
}

function showHideMenu() {
    if (isLoggedIn()) {
        $("#register-btn").hide();
        $("#login-btn").hide();

        $("#logout").show();
    } else {
        $("#register-btn").show();
        $("#login-btn").show();

        $("#logout").hide();
    }
}

function addBookBtn(e) {
    e.preventDefault();

    let caption = $("#caption").val();
    let content = $("#content").val();
    let author  = $("#author").val();
    let data= {
        caption:caption,
        content:content,
        author:author
    }

    addBook(data);
}