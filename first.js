let count = 0;
setTimeout(()=>{
    count+=1;
    document.querySelectorAll("li").forEach(valor => {
        valor.innerHTML= "Caco<strong>ta</strong>S";
    });
    console.log("JUJUJUjajajajaja ",count);
},3000);