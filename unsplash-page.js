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
    async function generate(){
      var username = document.getElementById("search").value;      
console.log(username);
document.getElementById("body-container").innerHTML= `<div class="cont">
<img
  src="https://source.unsplash.com/random/?${username}"
  alt=""
  height="300px"
  srcset=""
  class="image"
/>
<div class="cont-disc">
<div class="cont-disc-name">${username}</div>
  <p>
  ${username}
  </p>
  <h4>by ${username}</h4>

  <div class="btn-container">
    <a href="https://source.unsplash.com/random/?${username}" download="${username}.jpg" class="button1">
      <img
        src="https://img.icons8.com/?size=512&id=Ezk6WeFucgyE&format=png"
        width="25px"
        height="25px"
      />
    </a>
    <div href="" class="button1">➦</div>
  </div>
</div>
</div>`
};