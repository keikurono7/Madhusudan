window.onload = function(){   
    let count = 0;
    function ShowCounter() {
      if (count < 101) {
          $("#spnNumber").text(count);
          count++;
  
      } else if (count == 100) {
        $("#preloader").slideUp();
        $("#spnNumber").remove();
        clearInterval(interval);
  
      }
  
    }
    var interval = setInterval(function() {
      ShowCounter();
          
    }, 20);
  };
  setTimeout(()=>{
    document.getElementById("era").style.display = 'flex';
    setTimeout(()=>{
        document.getElementById("loading...").style.display = 'none';
        document.getElementById("era").classList.remove('hidden');
        document.getElementById("era").style.transition=" all 2s";
    },100)
    $("era").fadeIn();
  },2400);
  
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