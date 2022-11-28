import { checkAnimalAddForm, checkAnimalDeleteForm, checkAnimalEditForm, checkLocationAddForm, checkPasswordEditForm, checkSignupForm, checkUserEditForm } from "./forms.js";
import { AnimalAddPage, AnimalEditPage, AnimalProfilePage, ChooseLocationPage, ListPage, RecentPage, UserEditPage, UserProfilePage } from "./routes.js";
import { checkSigninForm, checkUserId } from "./signin.js";

// Document Ready
$(() => {

    checkUserId();

    $(document)

    .on("pagecontainerbeforeshow", function(event, ui) {
        
        /* PAGE ROUTES */
        switch(ui.toPage[0].id) {
            case "recent-page": RecentPage(); break;
            case "list-page": ListPage(); break;

            case "user-profile-page": UserProfilePage(); break;
            case "user-edit-page": UserEditPage(); break;
           

            case "animal-profile-page": AnimalProfilePage(); break;
            case "animal-add-page": AnimalAddPage(); break;
            case "animal-edit-page": AnimalEditPage(); break;
            
            case "choose-location-page": ChooseLocationPage(); break;
            case "location-edit-page": break;
            
        }
    })


   // EVENT DELEGATION
   .on("submit", "#signin-form", function(e) {
    e.preventDefault();
    checkSigninForm();
})
.on("submit", "#signup-form", function(e) {
    console.log("signup", e)
    e.preventDefault();
    checkSignupForm();
})
.on("submit", "#user-edit-form", function(e) {
    e.preventDefault();
    checkUserEditForm();
})
.on("submit", "#animal-edit-form", function(e) {
    e.preventDefault();
    checkAnimalEditForm();
})






.on("click", ".js-logout", function(e) {
    sessionStorage.removeItem("userId");
    checkUserId();
})


.on("click", ".animal-jump", function(e) {
    let id = $(this).data("id");

    sessionStorage.animalId = id;
})
.on("click", ".location-jump", function(e) {
    let id = $(this).data("id");

    sessionStorage.locationId = id;
})

.on("click", ".js-animal-delete", function(e) {
    checkAnimalDeleteForm();
})

.on("click", ".js-choose-animal-for-location", function(e) {
    $("#location-animal-id").val(sessionStorage.animalId);
    $("#location-back").val(-2);
})

.on("click", ".js-submit-user-edit-form", function(e) {
    checkUserEditForm();
})
.on("click", ".js-submit-password-edit-form", function(e) {
    checkPasswordEditForm();
})
.on("click", ".js-submit-animal-add-form", function(e) {
    checkAnimalAddForm();
})
.on("click", ".js-submit-animal-edit-form", function(e) {
    checkAnimalEditForm();
})
.on("click", ".js-submit-location-add-form", function(e) {
    checkLocationAddForm();
})



.on("click", ".nav-link", function(e) {
    if (e.cancelable) e.preventDefault();
    let id = $(this).index();
    $(this).parent().next().children().eq(id)
        .addClass("active")
        .siblings().removeClass("active");
    $(this).addClass("active")
        .siblings().removeClass("active");
})


    // ACTIVATE TOOLS
    .on("click", "[data-activate]", function(e) {
        const target = $(this).data("activate");
        $(target).addClass("active");
    })
    .on("click", "[data-deactivate]", function(e) {
        const target = $(this).data("deactivate");
        $(target).removeClass("active");
    })
    .on("click", "[data-toggle]", function(e) {
        const target = $(this).data("toggle");
        $(target).toggleClass("active");
    })
    .on("click", "[data-activateone]", function(e) {
        const target = $(this).data("activateone");
        $(target).toggleClass("active")
            .siblings().removeClass("active");
    })
});