
const content = $(".content");

const view = function (event) {
    event.preventDefault();
    content.empty();
    for (let i = 0; i < employeeList.length; i++) {
    const newCard= (`<div class= "card">
        <p>${employeeList[i].name}</p>
        <p>${employeeList[i].officeNum}</p>
        <p>${employeeList[i].phoneNum}</p>
    </div>`);
    content.append(newCard); 
}
};
const showViewDiv = function(event){
    event.preventDefault();
    $("#view").toggleClass("hide");

}
$("#viewEmployee").on("click", view);
$("#view").on("click", view);

const Add = function (event) {
    event.preventDefault();
    content.empty();

    let name = $("#name").val()
    let  officeNum = $("#officeNumber").val()
    let phoneNum = $("#phoneNumber").val()
    employeeList.push({
        name: name,
        officeNum:officeNum,
        phoneNum: phoneNum,
    });
    console.log(employeeList)
}

const showAddForm = function(event){
    event.preventDefault();
    $("#AddEmployee").toggleClass("hide");

}

$("#SubmitEmployee").on("click", Add);
$("#Add").on("click", showAddForm);



const verify = function () {

let nameVerify = $("#nameVerify").val()
console.log(nameVerify)
}

const showVerifyForm = function(event){
    event.preventDefault();
    $("#VerifyEmployee").toggleClass("hide");

}

$("#submitEmployeeVerify").on("click",verify)
$("#verify").on("click",showVerifyForm);