var now =  new Date();
var datetime = now.toLocaleString();
document.getElementById("datetime").innerHTML = datetime;

function translateFunction(){
    document.getElementById("up").style.transform = 'translateY(-200%)';
    document.getElementById("up").style.transition=" all 2s";
    document.getElementById("down").style.transform = 'translateY(200%)';
    document.getElementById("down").style.transition=" all 2s";
    setTimeout(()=>{
        document.getElementById("era").style.display = 'none';
        document.getElementById("menup").style.display = 'flex';
    },700);
    setTimeout(()=>{
        document.getElementById("menup").style.transform = 'translate(0%,30%)';
        document.getElementById("menup").style.transition=" all 2s";
    },1200);
    
}