// Calling on HTML elements 
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// setting counter to 1 
let currentActive = 1

// adding an event listener of click on 1
next.addEventListener('click' , () => {
    currentActive++ //incrementing up by 1 
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update()
})

prev.addEventListener('click' , () => {
    currentActive-- //decrementing down by 1
    if(currentActive < 1){
        currentActive = 1
    }
    update()
})

function update(){

    circles.forEach((circle, idx) =>{
        if(idx < currentActive){
            circle.classList.add('active')
        }
        else { circle.classList.remove('active')}
    })
    
    //targeting all active classes
    const actives = document.querySelectorAll('.active')
    
    //Changing the styling to help the line reach 33-66-99% 
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'

    //this is to disable the button functions
    if(currentActive === 1){
        prev.disabled = true
    }
    else if ( currentActive === circles.length){
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled= false 
    }  
}