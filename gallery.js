
const cont= document.querySelectorAll(".cont");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            console.log(11);
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
        await fetch("https://dhanush-image-generator-api.netlify.app/", configObj)
    
        .then(async function (response) {
          return await response.json();
        })
        .then(async function (object)
        {
            for(let i = 0; i < json.length; i++) {
                let obj = json[i];
            
                console.log(obj.id);
                let a= `<div class="cont">
                <img
                  src="https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                  alt=""
                  height="300px"
                  srcset=""
                  class="image"
                />
                <div class="cont-disc">
                  <div class="cont-disc-name">NAME</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
                    natus suscipit pariatur excepturi omnis quam sapiente ducimus
                    inventore distinctio minus aliquid modi voluptates quod, accusamus
                    nesciunt voluptate quia. Accusantium, non!
                  </p>
                  <h4>by yamuna</h4>
        
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
     
