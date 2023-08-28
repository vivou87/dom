let plusbtn = document.getElementsByClassName("btplus");
let moinbtn = document.getElementsByClassName("btmoin");
let elimine = document.getElementsByClassName("del");
let btnheart = document.getElementsByClassName("fa-heart");


function total(){
    let prix = document.getElementsByClassName("price");
    let qtes = document.getElementsByClassName("qte");
    let total = document.querySelector(".total-prix");
    let sum=0;
    for (let i=0;i< prix.length ;i++ ){
        sum=sum+(qtes[i].innerHTML*prix[i].innerHTML);
        total.innerHTML=sum;
        
    }
}

for(const btn of plusbtn){
    btn.addEventListener("click",function(){
        btn.nextElementSibling.innerHTML++;
    });
}

for (const btn of moinbtn) {
  btn.addEventListener("click", function () {
    if (btn.previousElementSibling.innerHTML>0){
    btn.previousElementSibling.innerHTML--;
    }
    total();
  });
}
for (const btn of elimine){
    btn.addEventListener("click",function(){
       btn.parentElement.parentElement.parentElement.remove()
       total();
    });
}


for (let i=0;i<plusbtn.length;i++){
    plusbtn[i].addEventListener("click", function () {
      plusbtn[i].nextSibling.innerHTML++;
    total();
    });
}

for (const btn of btnheart){
  btn.addEventListener("click",function(){
    console.log({btn});
    btn.classList.toggle("toggleHeart");
  })
}




