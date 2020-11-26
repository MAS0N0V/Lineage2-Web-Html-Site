/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const BASE_URL = "https://baas.kinvey.com/";
const APP_KEY = "kid_Byx7EZQ3m";
const APP_SECRET = "cd9b523c43cf433aacc6ff56dd052edf";

const HEADERS_BASIC = {
    "Authorization" : "Basic " + btoa(APP_KEY + ":" + APP_SECRET)
};
const HEADERS_KINVEY = {
    "Authorization" : "Basic " + btoa(APP_KEY + ":" + "24936bd3017d4faf996d0f80ae059e10")
}

function loginAjax(data) {
    return $.ajax({
        url:BASE_URL + "user/" + APP_KEY + "/login",
        method:"POST",
        headers: HEADERS_BASIC,
        data:data
    })
}
function registerAjax(data) {
    return $.ajax({
        url : BASE_URL + "user/" + APP_KEY,
        method:"POST",
        headers:HEADERS_BASIC,
        data:data
    });
}
function addBook(data) {
    return $.ajax({
        url:BASE_URL + "appdata/" + APP_KEY + "/books",
        method:"POST",
        headers:HEADERS_KINVEY,
        data:data
    })
}
function getAllBooks(data) {

}