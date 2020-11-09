const red_div = document.getElementById("red");
const yellow_div = document.getElementById("yellow");
const green_div = document.getElementById("green");
const result_P = document.querySelector(".result > p");

function click (){
    red_div.addEventListener('click',function(){
       red();
    })

    yellow_div.addEventListener('click',function(){
        yellow();
    })

    green_div.addEventListener('click',function(){
        green();
    })
}

click();

function red () {
  result_P.innerHTML = `Stop`.fontcolor("red");
}

function yellow () {
    result_P.innerHTML = `Wait`.fontcolor("yellow");
  }

  function green () {
    result_P.innerHTML = `Go`.fontcolor("green");
   
  }
  







