/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const BASE_URL = "https://baas.kinvey.com/";
const APP_KEY = "kid_SJFpz342Q";
const APP_SECRET = "71aee6c8bddd4a1292782dee72c7dabf";

const HEADERS_BASIC = {
    "Authorization" : "Basic " + btoa(APP_KEY + ":" + APP_SECRET)
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/bg_BG/sdk.js#xfbml=1&version=v3.2';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function(){
   
    $(document).on("click", "#register", register);
});

function register(e){
    e.preventDefault();
    
    let email = $("#reg-email").val();
    let username = $("#reg-username").val();
    let password = $("#reg-password").val();
    let day = $("#reg-day").val();
    let month = $("#reg-month").val();
    let year = $("#reg-year").val();
    
    let data = {
        email: email,
        username: username,
        password: btoa(password),
        day: day,
        month: month,
        year: year
    };
    
    $.ajax({
       url: BASE_URL + "user/" + APP_KEY,
       method: "POST",
       headers:HEADERS_BASIC,
       data:data
    });
    
}
    

