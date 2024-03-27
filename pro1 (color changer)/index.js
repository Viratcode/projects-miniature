const myclass=document.querySelector('body');
const buttons=document.querySelectorAll('.button');
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id==='purple'){
            myclass.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='aqua'){
            myclass.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='beige'){
            myclass.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='red'){
            myclass.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='rosybrown'){
            myclass.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='royalblue'){
            myclass.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='pink'){
            myclass.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='greenyellow'){
            myclass.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='orange'){
            myclass.style.backgroundColor=e.target.id;
        }
        
    });
});