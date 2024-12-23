let input = document.getElementById('result')
let button  = document.querySelectorAll('button')
let string = ""
let arr = Array.from(button)
arr.forEach(button=>{
    button.addEventLinsterer('click',(e)=>{
        if (e.target.innerHTML=="="){
            string = eval(string)
            input.value=string
        }   
        else{
            string += e.target.innerHTML
            input.value = string 
        }
    })
})