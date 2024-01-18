let value1=document.getElementById("inslot1");
let value2=document.getElementById("inslot2");
let value3=document.getElementById("inslot3");

let values=[
    '😂','😁','😭','😍','😝','😎','😤'
]

function getRandomValue(){
    return values[parseInt(Math.random()*7)];
}

let animationId;
function updateAnimation(newSpeed){
    if(animationId){
        clearInterval(animationId);
    }
    animationId=setInterval(()=>{
        value1.innerText=getRandomValue();
        value2.innerText=getRandomValue();
        value3.innerText=getRandomValue();
    },1000/newSpeed)
}

// let inpSpeed=document.getElementById('inpS')

// inpSpeed.onchange=(event)=>{
//     console.log(event.target.value);

//     //document.documentElement is the ":root" of css
//     document.documentElement.style.setProperty('--speed',event.target.value);
//     updateAnimation(event.target.value);
// }

let btn=document.getElementById('btn-stop');
let counter=1;
updateAnimation(7);
btn.onclick=()=>{
    console.log("button clicked");
    let speed=7;
    let intervalId=setInterval(function(){
        if(counter==8){
            clearInterval(intervalId);
            clearInterval(animationId)
        }
        updateAnimation(speed);
        document.documentElement.style.setProperty('--speed',speed);
        speed--;
        counter++;
    },400)
    let text=[];
    setTimeout(()=>{
        for(let i=1;i<4;i++){
            let slot=document.getElementById(`slot${i}`);
            slot.innerHTML=`<div>${getRandomValue()}</div>`;
            text.push(slot.innerText);
        }
    },2800)
    setTimeout(()=>{
        if(text[0]==text[1] && text[1]==text[2]){
            alert("You WON!")
        }else{
            alert("better luck next-time");
        }
    },3500);
}
