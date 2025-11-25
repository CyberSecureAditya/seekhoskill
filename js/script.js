const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

const container=document.querySelector('.container');
const registerbtn=document.querySelector('.register-btn');
const loginbtn=document.querySelector('.login-btnn');

// Authication Javascript
registerbtn.addEventListener('click',()=>{
    container.classList.add('active');
});

loginbtn.addEventListener('click',()=>{
    container.classList.remove('active');
});

// Hamberg Ui JS Script
if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}