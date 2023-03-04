 
const dark = document.getElementById("dark")
const body = document.getElementById("body")
dark.addEventListener("click", (eo) => {

    body.classList.toggle("dark")

});


let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{

    navbar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }

};