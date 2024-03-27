const colorch=function (){
    const v="123456789ABCDEF";
    let col='#';
    for(let i=0;i<6;i++){
        col+=v[Math.floor(Math.random()*16)]
    }
    return col;
};
let inter;
function startchangingcolor(){
    
    inter=setInterval(coloring,1000);
    function coloring(){
        document.body.style.backgroundColor=colorch();
    }
    };


function stopchangingcolor(){
    clearInterval(inter);
}
document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);