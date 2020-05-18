const speed = 0.02;

const colorList = [
  [244, 67, 54],
  [233, 30, 99],
  [156, 39, 176],
  [103, 58, 183],
  [63, 81, 181],
  [33, 150, 243],
  [3, 169, 244],
  [0, 188, 212],
  [0, 150, 136],
  [76, 175, 80],
  [139, 195, 74],
  [205, 220, 57],
  [255, 235, 59],
  [255, 193, 7],
  [255, 152, 0],
  [255, 87, 34]
];

let d = false, td, c1, c2, tc1, tc2;

function generate(){
  td = Math.floor(Math.random()*359);
  tc1 = colorList[Math.floor(Math.random()*colorList.length)];
  tc2 = colorList[Math.floor(Math.random()*colorList.length)];
  while(tc2 == tc1){
    tc2 = colorList[Math.floor(Math.random()*colorList.length)];
  }
  if(!d){
    d = td;
    c1 = tc1;
    c2 = tc2;
  }
  requestAnimationFrame(update);
}

function update(){
  d = speed * td + (1 - speed) * d;
  for(i = 0;i < c1.length;i++){
    c1[i] = speed * tc1[i] + (1 - speed) * c1[i];
    c2[i] = speed * tc2[i] + (1 - speed) * c2[i];
  }
  document.querySelector('#bg').style.background = "linear-gradient("+d+"deg, rgb("+c1[0]+","+c1[1]+","+c1[2]+") 0%, rgb("+c2[0]+","+c2[1]+","+c2[2]+") 100%)";
  document.querySelector('#msg input').value = "linear-gradient("+td+"deg, rgb("+Math.floor(tc1[0])+","+Math.floor(tc1[1])+","+Math.floor(tc1[2])+") 0%, rgb("+Math.floor(tc2[0])+","+Math.floor(tc2[1])+","+Math.floor(tc2[2])+") 100%)";
 if(d != td){
  requestAnimationFrame(update);
 }
}

generate();

document.querySelector('#bg').addEventListener("click", generate);

function select(){
  document.querySelector('#msg input').select();
  document.execCommand("copy");
  document.querySelector('#msg p').classList.add("c");
  setTimeout(function(){
    document.querySelector('#msg p').classList.remove("c");
  }, 500);
}

document.querySelector('#msg input').addEventListener("click", select);