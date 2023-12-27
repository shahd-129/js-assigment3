var nameInput = document.getElementById("siteName")
var urlInput = document.getElementById("siteUrl")
var closeBtn = document.getElementById("closeBtn");
var boxModal = document.querySelector(".box-info");

 var urlList = [];
function  addData() {
    var bookMark = {
        name: nameInput.value,
        url: urlInput.value
    }
       if (
        nameInput.classList.contains("is-valid") &&
        urlInput.classList.contains("is-valid")
       ){
        urlList.push(bookMark)
        localStorage.setItem("list" , JSON.stringify(urlList))
        showData()
       }
  else{
    boxModal.classList.remove("d-none");
}
}
  

function showData() {
    datatemp = ''
    for (var i = 0; i < urlList.length; i++) {
        datatemp += `<tr>
        <td>`+[i]+`</td>
        <td>`+urlList[i].name+`</td>
        <td>
          <a href="${urlList[i].url}" target="_blank"><button class="btn btn-warning">visit</button></a> 
        </td>
        <td>
            <button onclick="deletData(`+i+`)" class="btn btn-danger">delete</button>
        </td>
    </tr>`    
    }
   document.getElementById("data").innerHTML = datatemp
}

function deletData(x) {

    urlList.splice(x , 1)
    localStorage.setItem("list" , JSON.stringify(urlList))
    showData()
}



var nameRegex = /^\w{3,}(\s+\w*$)*$/;
var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
nameInput.addEventListener("input" , function () {
    validate(nameInput , nameRegex)
})
urlInput.addEventListener("input" , function () {
    validate(urlInput , urlRegex)
})

function  validate(element , regex) {
    var testRegex = regex;
    if( testRegex.test(element.value)){
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
    } 
    else {
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
    }
}
function closeModal() {
  boxModal.classList.add("d-none");
}
closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeModal();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.urlList.contains("box-info")) {
    closeModal();
  }
});
