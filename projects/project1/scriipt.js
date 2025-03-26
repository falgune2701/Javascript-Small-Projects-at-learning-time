const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach(function(button){
    button.addEventListener('click' , function(e){
        // console.log(e);
        // console.log(e.target);    // this two line code for bater understanding....
        const color = e.target.id
        switch (color) {
            case "red":
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;           
        }
        
    })
    
})