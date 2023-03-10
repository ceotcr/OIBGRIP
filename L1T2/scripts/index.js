import "./typeit.umd.js";
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#txt-type", {
        speed: 100,
        loop: true,
    })
        .type("Web Developer!")
        .pause(2000)
        .delete(15)
        .type("UI/UX Designer!")
        .pause(2000)
        .delete(15)
        .type("Freelancer!")
        .pause(2000)
        .delete(11)
        .go();

});