const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const r = document.querySelector('#results');
    
    if (h === '' || h < 0 || isNaN(h)) {
        r.innerHTML = `Please fill height with valid elements: ${h}`;
    } else if (w === '' || w < 0 || isNaN(w)) {
        r.innerHTML = `Please fill weight with valid elements: ${w}`;
    } else {
        const bmi = (w / ((h * h) / 10000)).toFixed(2);
        r.innerHTML = `<span>Your BMI: ${bmi}</span>`;
        
        if (bmi <= 18.6) {
            r.innerHTML += ` - You are underweight`;
        } else if (bmi < 24.9) {
            r.innerHTML += ` - You are healthy`;
        } else {
            r.innerHTML += ` - You are overweight`;
        }
    }
});
