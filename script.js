// let tile=document.getElementByClassName("boxmpg1");
// tile.addEventListener('click',turnBtn);
let mainmusic=new Audio("Awakening.mp3");
let clickmusic=new Audio("ting.mp3");
let winmusic=new Audio("On One Team.mp3");
mainmusic.play();
let telem=document.getElementById('turninfo');
let turn="X";
let wins=false;
function turnBtn(event){
    // let telem=document.getElementByClassName("turn");
    // let elem=event.currentTarget;
    clickmusic.play();
    if( event.innerHTML==`` && wins==false)
    {
    event.innerHTML=`${turn}`;
    Win();
    if(turn==="X" && wins==false){
        turn="O";
        // console.log(telem.innerText);
         telem.innerHTML=`Now is ${turn}'s turn`;
       }
       else if(turn==="O"&& wins==false){
        turn="X";
        // console.log(telem.innerText);
        telem.innerHTML=`Now is ${turn}'s turn`;
       }
}
}
function Win(){
    let box=document.getElementsByClassName("boxmpg1");
    let turni=document.getElementById("turninfo");
    let wincombos=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
    wincombos.forEach(e=>{
        if((box[e[0]].innerHTML===box[e[1]].innerHTML) && (box[e[1]].innerHTML===box[e[2]].innerHTML)&& (box[e[0]].innerHTML===box[e[2]].innerHTML) &&(box[e[0]].innerHTML!=``)&&(box[e[1]].innerHTML!=``)&&(box[e[2]].innerHTML!=``)){
            
            if(turn=="X"){           
            telem.innerHTML=`<i class="fa-solid fa-user fa-2xl" style="color: #db0ab5;"></i>Won!<div><i class="fa-solid fa-trophy-star fa-2xl" style="color: #f4ed15;"></i></div>`;
            wins=true;
            mainmusic.pause();
            mainmusic.currentTime=0;
            turni.style.fontSize="50px";
            turni.style.fontFamily="Mind";
            turni.style.color="gold";
            turni.style.textShadow="1px 1px 15px  rgb(191, 165, 18)";
            winmusic.play();
            }
            else if(turn=="O"){
                telem.innerHTML=`<i class="fa-solid fa-user fa-2xl" style="color: #0a57db;"></i>Won!<i class="fa-solid fa-trophy-star fa-2xl" style="color: #f4ed15;"></i>`;
                wins=true;  
                mainmusic.pause();
            mainmusic.currentTime=0; 
            winmusic.play();   
            turni.style.fontSize="50px";
            turni.style.color="gold";
            turni.style.fontFamily="Mind";
            turni.style.textShadow="1px 1px 15px  rgb(191, 165, 18)";    
            }
        }
    })

}