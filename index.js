var display = document.querySelector("#display");
var buttons = document.querySelectorAll("button");
var rocket = document.querySelector('.emoji');
var rocket1 = document.querySelector('#rocket');
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.id==="="){
            display.value = eval(display.value);
        }
        else if(btn.id ==="ac"){
            display.value = "";
        }
        else if(btn.id ==="de"){
            display.value = display.value.slice(0, -1);
        }
        else{
            display.value +=btn.id;
        }
    });
});
rocket.addEventListener("click",()=>{
    rocket1.classList.add('rocket');
    confirm('Only one chance if you want again Please refresh and then click');
})