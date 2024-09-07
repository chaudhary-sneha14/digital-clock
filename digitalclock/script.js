 let hrs = document.querySelector("#hrs");
 let min = document.querySelector("#min");
 let sec = document.querySelector("#sec");


 
 
 setInterval(() => {
    let curretTime = new Date();
    hrs.innerHTML=(curretTime.getHours()<10?"0":"")+ curretTime.getHours();
    min.innerHTML=(curretTime.getMinutes()<10?"0":"")+curretTime.getMinutes();
    sec.innerHTML=(curretTime.getSeconds()<10?"0":"")+curretTime.getSeconds();
    
 },1000);


 