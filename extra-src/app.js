import {addDOMContent} from "./add-task-and-projects";

//Handling Menu Click Event
const menuBtn = document.getElementById("menuBT");
const navMenuHandler = function () {
    const leftmenu = document.getElementById("left-bar");
    leftmenu.classList.toggle("hide");
    const rightbar = document.getElementById("right-bar");
    rightbar.classList.add("hide");
}
menuBtn.addEventListener("click" , navMenuHandler);

//Handling Home Click Event

const homeLogo =  document.getElementById("item-2");

const homeHandler = function () {
    window.location.reload();
}

homeLogo.addEventListener("click" , homeHandler);


//Handling Add Button Handling Event

const projectlist = document.getElementById("project-sorter");
const theLi = projectlist.querySelector("li");

theLi.addEventListener("click" , addDOMContent)


