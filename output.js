
function handleFileSelect(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    var previewImage = document.getElementById("preview");
    previewImage.style.visibility = "visible";
    previewImage.style.height = "250px";
    previewImage.style.width = "250px";
    previewImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
}
const fileInput = document.getElementById("uploadInput");
fileInput.addEventListener("change", handleFileSelect, false);

async function fun(){
  console.log("hello");
  var previewImage = document.getElementById("preview");
  
  previewImage.src ="";
  previewImage.style.visibility = "hidden";
  var element0 =await document.getElementById("loader");
        element0.style.visibility = "visible" ;
  var element1 =await document.getElementById("body-continer");
        element1.style.visibility = "hidden" ;      

  //await document.getElementsByClassName("loader").css('background-color', 'grey');
  function ConvertToBase64(file) {
    return new Promise((resolve, reject) => {
      const filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.onload = () => {
        resolve(filereader.result);
      };
      filereader.onerror = (error) => {
        reject(error);
      };
    });
  };
  //const Nam = document.getElementById("name").value;
  const Tit = document.getElementById("title").value;
  const Img = document.getElementById("uploadInput");
  const ImgName = await ConvertToBase64(Img.files[0]);
  const Des = document.getElementById("Description").value;

  let formData = {
    "name": `${sessionStorage.getItem("user")}`,
    "title": `${Tit}`,
    "image": `${ImgName}`,
    "description":`${Des}`
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  };

 await fetch("https://image-generator-api-render.onrender.com/post", configObj)

    .then(async function (response) {
      return await response.json();
    })
    .then(async function (object) {
      element0.style.visibility = "hidden";
      element1.style.visibility = "visible" ;
     let aa= await document.getElementById("forms").reset();
     window.location="./uvpage.html";
     await console.log(object);
    })
    .catch(async function (error) {
      element0.style.visibility = "hidden";
      element1.style.visibility = "visible" ;
     await alert("Bad things! Ragnarők!");
     window.location="./uvpage.html";
   // await  console.log(error.message);
    });
};

