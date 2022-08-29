let menu=document.querySelector('#menu-bar');

let navbar=document.querySelector('.navbar');
let header=document.querySelector('.header-2');

menu.addEventListener('click',function (){
    menu.classList.toggle("fa-times");
    navbar.classList.toggle('active');

});
// what happen when scroll
window.onscroll=function (){
    menu.classList.remove("fa-times");
    navbar.classList.remove('active');
    if(window.scrollY > 130){
        header.classList.add('scroll');
    }
    else{
        header.classList.remove('scroll');
    }

}
//for counter deal
let countdate=new Date('october 1,2022 00:00:00').getTime();
let gap;
function countDown() {

    let now = new Date().getTime();
    gap = countdate - now;
    let second=1000;
    let minute=second *60;
    let hour=minute *60;
    let day=hour*24;

    let d=Math.floor(gap / (day));
    let h=Math.floor((gap % (day)) / (hour) );
    let m=Math.floor((gap % (hour)) / (minute) );
    let s=Math.floor((gap % (minute)) / (second) );
    document.getElementById('day').innerText=d;
    document.getElementById('hour').innerText=h;
    document.getElementById('minute').innerText=m;
    document.getElementById('second').innerText=s;


}

setInterval(function (){
    countDown();
},1000);





