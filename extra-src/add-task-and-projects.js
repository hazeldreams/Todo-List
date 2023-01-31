//Adding Project Form To The DOM

const addDOMContent = function () {

    const projectlist = document.getElementById("project-sorter");
    const theLi = projectlist.querySelector("li");

    if (theLi){
        console.log("Exist");
    }


}

export {addDOMContent}



/*
git config --global user.email "you@example.com"
  git config --global user.name "Your Name"


aLL pEOJECTS

PROJECTS = [{},{}];

Adding A Project

Creating Object
obj = {
        "project id" : array.length-1;
        "project name" : "Bla Bla Bla";
           };


Object Structure



Rendering it to the dom


Allprojects Array = [];

create Project Object = {

                          "project id" : array.length-1;
                          "project name" : "Bla Bla Bla";

                         }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

ADD PROJECT

RENDERING DOM ELEMENTS

project name
textbox
button add and cancel button


//

CREATE PROJECT

array = [];

object = {
           pr-Name: "",
           pr-id: array.length-1,
           }

adding the object to array

clearing the dom input form and rendering the new project details from the array



 */