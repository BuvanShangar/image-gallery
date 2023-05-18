
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