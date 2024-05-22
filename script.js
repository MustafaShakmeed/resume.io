function addNewWEField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    newNode.setAttribute("rows", 3);

    let WeOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    WeOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    newNode.setAttribute("rows", 3);

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddbutton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}


// generating

function generateCV() {
    // console.log("yes its working")

    let nameField = document.getElementById("name").value;
    let contactField = document.getElementById("Contact").value;
    let adressField = document.getElementById("adress").value;
    // let facebookField = document.getElementById("facebook").value;
    let instaField = document.getElementById("insta").value;
    let linkField = document.getElementById("linkdin").value;


    let nameT = document.getElementById("nameT");
    let nameT2 = document.getElementById("nameT2");
    let ContactT = document.getElementById("ContactT");
    let adressT = document.getElementById("adressT");
    // let fbT= document.getElementById("fbT");
    let inT = document.getElementById("inT");
    let lnT = document.getElementById("lnT");


    nameT.innerHTML = nameField;
    nameT2.innerHTML = nameField;
    ContactT.innerHTML = contactField;
    adressT.innerHTML = adressField;
    // fbT.innerHTML= facebookField;
    inT.innerHTML = instaField;
    lnT.innerHTML = linkField;

    document.getElementById("fbT").innerHTML = document.getElementById("facebook").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objField").value;

    // workexp

    let wes = document.getElementsByClassName("weField");

    let str = "";

    for (let e of wes) {
        str = str + `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;

    // acdemicqu

    let aqs = document.getElementsByClassName("aqField");

    let str1 = " ";

    for (let e of aqs) {
        str1 = str1 + `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    document.getElementById("cv-form").style.display = "none"
    document.getElementById("cv-templeat").style.display = "block"


}

function printCV() {
    window.print();
}

function backRe() {
    console.log("it is working")

    document.getElementById("cv-templeat").style.display = "none"
    document.getElementById("cv-form ").style.display = "block"

}