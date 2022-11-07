
import { query } from "./functions.js";

export const checkSigninForm = () => {
    const userval = $("#signin-username").val();
    const passval = $("#signin-password").val();

    console.log(userval, passval)

    if (userval === "user" && passval === "pass") {
        // Logged In
        console.log("Success");
        sessionStorage.userId = 3;

        $("#signin-form")[0].reset();
    } 
    
    
    else {
        // Not Logged In
     
        console.log("Failure");
        sessionStorage.removeItem("userId");

        $(".warning").html("");
        setTimeout(()=>{$(".warning").html("");},3000)
    }

    // failed login message 
    var login_success = false; 
  
    if(login_success == false)
{
    document.getElementById("login_failed").innerHTML = "Login Failed.Please try again.";
    
}

    checkUserId();
}


export const checkUserId = () => {
    const pages = ["#signin-page", "#signup-page", ""];
    
    if (sessionStorage.userId === undefined) {
        // not logged in
        if (!pages.some(p => p === window.location.hash)) {
            $.mobile.navigate("#signin-page");
        }
    } else {
        // logged in
        if (pages.some(p => p === window.location.hash)) {
            $.mobile.navigate("#recent-page");
        }
    }
}