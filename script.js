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

function translateFunction1(){
    document.getElementById("up").style.transform = 'translateY(-800%)';
    document.getElementById("up").style.transition=" all 2s";
    document.getElementById("nav").style.transform = 'translateY(-600%)';
    document.getElementById("nav").style.transition=" all 2s";
    document.getElementById("down").style.transform = 'translateY(400%)';
    document.getElementById("down").style.transition=" all 2s";
    setTimeout(()=>{
        document.getElementById("era").style.display = 'none';
        document.getElementById("menup").style.display = 'flex';
    },500);
    setTimeout(()=>{
        document.getElementById("menup").style.transform = 'translate(0%,20%)';
        document.getElementById("menup").style.transition=" all 2s";
    },600);
    
}

function translateFunction2(){
    document.getElementById("menup").style.transform = 'translate(-400%,20%)';
    document.getElementById("menup").style.transition=" all 3s";
    setTimeout(()=>{
        document.getElementById("era").style.display = 'flex';
        document.getElementById("menup").style.display = 'none';
    },500);
    setTimeout(()=>{
        document.getElementById("up").style.transform = 'translateY(0)';
        document.getElementById("up").style.transition=" all 2s";
        document.getElementById("nav").style.transform = 'translateY(0)';
        document.getElementById("nav").style.transition=" all 2s";
        document.getElementById("down").style.transform = 'translateY(0)';
        document.getElementById("down").style.transition=" all 2s";
    },600);
}

function openProject(){
  document.getElementById("menup").style.transform = 'translate(-400%,20%)';
    document.getElementById("menup").style.transition=" all 3s";
    setTimeout(()=>{
      document.getElementById("proj").style.display = 'flex';
      document.getElementById("menup").style.display = 'none';
  },500);
  setTimeout(()=>{
    document.getElementById("proj").style.transform = 'translate(0%,0%)';
    document.getElementById("proj").style.transition=" all 3s";
},600);
}

function backproj(){
  document.getElementById("proj").style.transform = 'translate(300%,0%)';
    document.getElementById("proj").style.transition=" all 3s";
    setTimeout(()=>{
      document.getElementById("proj").style.display = 'none';
      document.getElementById("menup").style.display = 'flex';
  },600);
  setTimeout(()=>{
    document.getElementById("menup").style.transform = 'translate(0%,20%)';
    document.getElementById("menup").style.transition=" all 3s";
},650);
}

