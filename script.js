let firstname = document.querySelector('.firstname')
let lastname = document.querySelector('.lastname')
let first = document.querySelector('.first')
let second = document.querySelector('.second')

let info = document.querySelector('.info')
let name1 = document.querySelector('.name1')
let name2 = document.querySelector('.name2')
let photo = document.querySelector('.photo')

let sub = document.querySelector('.sub')

let result1
let result2
let value1
let value2

firstname.addEventListener('input', function(e) {
    value1 = e.target.value
    if(value1.length > 3){
        result1 = 'success'
        first.innerText = result1
        first.style.color = 'green'
    } else {
        result1 = 'min length 3'
        first.innerText = result1
        first.style.color = 'red'
    }
})


lastname.addEventListener('input', function(e) {
    value2 = e.target.value
    if(value2.length > 3){
        result2 = 'success'
        second.innerText = result2
        second.style.color = 'green'
    } else {
        result2 = 'min length 3'
        second.innerText = result2
        second.style.color = 'red'
    }
    if (value1 == value2){
        result2 = 'names are same'
        second.innerText = result2
        second.style.color = 'red'
    }
})

sub.addEventListener('click', function(){
    let img = document.createElement('img')
    img.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/149/149071.png')
    if(result1 === 'success' && result2 === 'success'){
        name1.innerText = `firstname:  ${value1}`
        name2.innerText = `secondname:  ${value2}`
        photo.innerText = 'profile photo'
        img.style.width = '150px'
        info.append(img)
        info.style.background = 'blanchedalmond'
    }
})
