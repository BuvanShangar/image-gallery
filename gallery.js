
const cont= document.querySelectorAll(".cont");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show",entry.isIntersecting);
            if(entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
    {
        threshold: 0,
    }
)
cont.forEach(cont => {
        observer.observe(cont)
    })


    let configObj = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      };
    async function loader(){
        await fetch("https://image-generator-api.netlify.app/", configObj)
    
        .then(async function (response) {
          return await response.json();
        })
        .then(async function (object)
        {
            let json=object.body;
            var a=document.getElementById("body-container").innerHTML;
            for(let i = 0; i < json.length; i++) {
                let obj = json[i];
            
              
                 a+= `<div class="cont">
                <img
                  src="${obj.image}"
                  alt=""
                  height="300px"
                  srcset=""
                  class="image"
                />
                <div class="cont-disc">

44                <div class="cont-disc-name">${obj.title}</div>
                  <p>
                  ${obj.description}
                  </p>
                  <h4>by ${obj.name}</h4>
        
                  <div class="btn-container">
                    <div href="" class="button1">♡</div>
                    <div href="" class="button1">
                      <img
                        src="https://img.icons8.com/?size=512&id=Ezk6WeFucgyE&format=png"
                        width="25px"
                        height="25px"
                      />
                    </div>
                    <div href="" class="button1">➦</div>
                  </div>
                </div>
              </div>`
            }

    })};
     
