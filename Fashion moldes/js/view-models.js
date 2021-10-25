const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");


const view1= document.getElementById("view1");
const view2= document.getElementById("view2");
const view3= document.getElementById("view3");

card1.addEventListener("click",()=>{
    view1.style.display = 'flex';
})
card2.addEventListener("click",()=>{
    view2.style.display = 'flex';
})
card3.addEventListener("click",()=>{
    view3.style.display = 'flex';
})

const close1= document.querySelector('.close1')
const close2= document.querySelector('.close2')
const close3= document.querySelector('.close3')

close1.addEventListener("click",()=>{
    view1.style.display = 'none';

})
close2.addEventListener("click",()=>{
    view2.style.display = 'none';
    
})
close3.addEventListener("click",()=>{
    view3.style.display = 'none';
})