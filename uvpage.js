// window.onbeforeunload = function() {
//     localStorage.removeItem(key);
//     return '';
//   };
let configObj = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  }
};
  async function userload(){
    document.getElementById("user").innerHTML=`hey ${sessionStorage.getItem("user")} 👋...`;
    let formData = {
      "search":`${sessionStorage.getItem("user")}`
    };
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData) 
    };
    document.getElementById("body-container").innerHTML=`<div class="loader" id="loader">
                        <div class="log-img" style="background-color: rgba(217, 217, 217, 0.666); border-radius: 24px;">
                        <img src="./Screenshot from 2023-05-08 18-46-14.png" alt="" sizes="" width="300px" srcset="" class=""><br>
                        <img src="https://i.gifer.com/YCZH.gif" alt="" sizes="" width="300px" srcset="" class="">
                        <!-- <h2 class="" style="text-align: center; color: #000000;" >loading...</h2> -->
                        </div>
                      </div>`;

      await fetch("https://image-generator-api-render.onrender.com/get", configObj)
      .then(async function (response) {
        console.log(response);
        return await response.json();
      })
      .then(async function (object)
      {    console.log(object);
          let json=object;
          console.log(json);
          var a=document.getElementById("body-container").innerHTML="";
          for(let i = 0; i < json.length; i++) {
              let obj = json[i];
              console.log(obj.image);
             // console.log("hello");
            console.log(json);
            document.getElementById("body-container").innerHTML+= `<div class="cont">
            <img
              src="${obj.image}"
              alt=""
              height="300px"
              srcset=""
              class="image"
            />
            <div class="cont-disc">
            <div class="cont-disc-name">${obj.title}</div>
              <p>
              ${obj.description}
              </p>
              <h4>by ${obj.name}</h4>
    
              <div class="btn-container">
                <button onclick="deletee('${obj._id}')" class="button1">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                    width="25px"
                    height="25px"
                  /> </button>
                <div href="${obj.image}" download="${obj.title}.jpg" class="button1">
                  <img
                    src="https://img.icons8.com/?size=512&id=Ezk6WeFucgyE&format=png"
                    width="25px"
                    height="25px"
                  />
                </div>
                <div href="" class="button1">➦</div>
              </div>
            </div>
          </div>`;
            console.log("end");
           }

  })};  
  async function deletee(...id){
console.log(id);
    await fetch(`https://image-generator-api-render.onrender.com/delete/${id}`, configObj)
    .then(async function (response) {
      console.log(response);
      return await response.json();
    })
    .then(async function (object)
    {    console.log(object);
      userload();
    })
  };