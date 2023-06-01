// const cont= document.querySelectorAll(".cont");
// const observer = new IntersectionObserver(
//     entries => {
//         entries.forEach(entry => {
//             entry.target.classList.toggle("show",entry.isIntersecting);
//             if(entry.isIntersecting) observer.unobserve(entry.target)
//         })
//     },
//     {
//         threshold: 0,
//     }
// )
// cont.forEach(cont => {
//         observer.observe(cont)
//     })
    

async function generate(){
      var search = document.getElementById("search").value;      
//console.log(username);
let configObj = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  }
  //,
  // body:{
  //   client_id:"Lit6CmPbDpMfc6suXVJ9IdPibYV3TTxpWcazLE8wBQM",
  //   query:`${search}`,
  //   count:15

  // }
};
document.getElementById("body-container").innerHTML=`<div class="loader" id="loader">
                          <div class="log-img" style="background-color: rgba(217, 217, 217, 0.666); border-radius: 24px;">
                          <img src="./Screenshot from 2023-05-08 18-46-14.png" alt="" sizes="" width="300px" srcset="" class=""><br>
                          <img src="https://i.gifer.com/YCZH.gif" alt="" sizes="" width="300px" srcset="" class="">
                          <!-- <h2 class="" style="text-align: center; color: #000000;" >loading...</h2> -->
                          </div>
                        </div>`;

        await fetch(`https://api.unsplash.com/search/photos?client_id=Lit6CmPbDpMfc6suXVJ9IdPibYV3TTxpWcazLE8wBQM&query=${search}&count=15`, configObj)
        .then(async function (response) {
          console.log(response);
          return await response.json();
        })
        .then(async function (object){
         {    
          console.log(object);
            let json=object.results;
            console.log(json);
            var a=document.getElementById("body-container").innerHTML="";
            for(let i = 0; i < json.length; i++) {
                let obj = json[i];
               // console.log(obj.image);
               // console.log("hello");
              console.log(json);
              document.getElementById("body-container").innerHTML+= `<div class="cont">
              <img
                src="${obj.urls.regular}"
                alt=""
                height="300px"
                srcset=""
                class="image"
              />
              <div class="cont-disc">
              <div class="cont-disc-name">${search}</div>
                <p>
                ${obj.description}
                </p>
                <h4>by ${obj.user.first_name}</h4>
      
                <div class="btn-container">
                  <div href="" class="button1"></div>
                  <a  href="${obj.links.download_location}" download="${obj.links.download}.jpg" class="button1">
                    <img
                      src="https://img.icons8.com/?size=512&id=Ezk6WeFucgyE&format=png"
                      width="25px"
                      height="25px"
                    />
                  </a>
                  <a  href="${obj.links.download_location}" download="${obj.links.download}.jpg" class="button1">
                    <img
                      src="https://img.icons8.com/?size=512&id=Ezk6WeFucgyE&format=png"
                      width="25px"
                      height="25px"
                    />
                  </a>
                  <div href="" class="button1">➦</div>
                </div>
              </div>
            </div>`;
              console.log("end");}
        };})};