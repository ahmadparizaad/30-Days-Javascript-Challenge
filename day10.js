//Event Handling

document.addEventListener('DOMContentLoaded', function(){
    const para = document.getElementById('para')
    const btn = document.getElementById('btn')
    if(para && btn){
        btn.addEventListener('click', function(){
            para.innerHTML = 'Button Clicked'
        })
    }

    const image  = document.getElementById('image')
    if(image){
        image.addEventListener('dblclick', function(){
            image.style.display = 'none'
        })
    }

    btn.addEventListener('mouseover', function(){
        btn.style.backgroundColor = 'red'
    })
    btn.addEventListener('mouseout', function(){
        btn.style.backgroundColor = 'white'
    })

    const input = document.getElementById('input')
    // input.addEventListener('keydown', function(){
    //     console.log(input.value);
    // })

    input.addEventListener('keyup', function(){
        console.log(input.value);
    })

    const form = document.getElementById('myForm')
    form.addEventListener('submit', function(e){
        e.preventDefault()
        const formData = new FormData(form)
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value
        })
        console.log(data);
    })

    const select = document.getElementById('select')
    const selectValue = document.getElementById('selectedValue')
    select.addEventListener('change', function(){
        selectValue.innerHTML = select.value
    })

    const unList = document.getElementById('unlist')
    unList.addEventListener('click', function(event){
        if(event.target && event.target.nodeName == 'LI'){
            console.log(event.target.textContent);
        }
    })
    const addButton = document.getElementById('addChild')
    addButton.addEventListener('click', function(){
        const newLI = document.createElement('li')
        newLI.textContent = 'New List Item'
        unList.appendChild(newLI)        
    })

})
