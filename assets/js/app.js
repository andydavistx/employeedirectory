
const content = $(".content");

const view = function () {
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
$("#view").on("click",view);
