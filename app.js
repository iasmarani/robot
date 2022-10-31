const checkbox = document.getElementById('checkbox');
const submitBtn =  document.querySelector('button[type=submit]');
const elems = document.querySelectorAll('.element');
const selectColor = document.getElementById('selectColor')

// Disable checkbox and button
checkbox.disabled = true;
submitBtn.disabled = true;

// assign color to elements
elems.forEach(function(elem){
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.innerHTML = color;
    selectColor.innerHTML = color;
})


// generate colors
function getRandomColor(){
    const letter = '0123456789ABCDEF';
    let color = '#';
    for(i = 0 ; i < 6 ; i++){
        console.log(letter[Math.floor(Math.random() * 16)])
    color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}


// check the right color
elems.forEach(function(elem){
    elem.addEventListener('click',function(){
        if(elem.innerHTML === selectColor.innerHTML ){
           checkbox.checked = true;
           alert('You are human!');
           submitBtn.disabled = false;
           submitBtn.classList.remove('btn-light');
           submitBtn.classList.add('btn-success');
        } else{
              alert('Please verify that you are human');
              location.reload(true);
        }
    })
})