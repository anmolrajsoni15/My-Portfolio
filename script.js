console.log("Sab theek hai....")
document.querySelector('.dark').style.display = 'none';
document.querySelector('.colormode').addEventListener("click", ()=>{
    document.querySelector('.lightmode').classList.toggle('darkmode');
    if(document.querySelector('.lightmode').classList.contains('darkmode')){
        document.querySelector('.light').style.display = 'inline';
        document.querySelector('.dark').style.display = 'none';
    }
    else{
        document.querySelector('.light').style.display = 'none';
        document.querySelector('.dark').style.display = 'inline';
    }
})