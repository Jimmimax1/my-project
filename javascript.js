const button = document.getElementById('button_id')
const label = document.getElementById('label1')
const label2 = document.getElementById('label2')
const buttonres = document.getElementById('reset_id')
const butshow = document.getElementById('showBtn')
const butimage = document.getElementById('butimage')
const butshow2 = document.getElementById('showBtn-2')
const butimage2 = document.getElementById('butimage-2')

const butshow3 = document.getElementById('showBtn-3')
const butimage3 = document.getElementById('butimage-3')
const butshow4 = document.getElementById('showBtn-4')
const butimage4 = document.getElementById('butimage-4')


butshow.addEventListener('click', () => {
    const file = document.querySelector('input[type="file"].input1').files[0]; 
    // Метод, который ищет первый элемент, соответствующий CSS-селектору 
    // = элемент <input> и  у которого атрибут type равен "file"
    // а files[0] это первая запссь(все равно надо) это всеравно, что из шкафа надо взять вещь
    // хоть она и одна, но сам шкаф не прочтешь, а вещь из него
    butimage.innerHTML = `<img src="${URL.createObjectURL(file)}" width="300" height="250" style="object-fit: contain;">`;
});

butshow2.addEventListener('click', () => {
    const file2 = document.querySelector('input[type="file"].input2').files[0];
    butimage2.innerHTML = `<img src="${URL.createObjectURL(file2)}" width="300" height="250" style="object-fit: contain;">`;
}
)

butshow3.addEventListener('click', () => {
    const file3 = document.querySelector('input[type="file"].input3').files[0];
    butimage3.innerHTML = `<img src="${URL.createObjectURL(file3)}" width="300" height="250" style="object-fit: contain;">`;
}
)

butshow4.addEventListener('click', () => {
    const file4 = document.querySelector('input[type="file"].input4').files[0];
    butimage4.innerHTML = `<img src="${URL.createObjectURL(file4)}" width="300" height="250" style="object-fit: contain;">`;
}
)

let count = 0;

button.addEventListener('click', function() 
{
    count++;
    label.innerText = `Число: ${count} `
    if (count>28) {
        label2.innerText = `Stop please`;
        label.style.color = 'red'; 
        label2.style.color = 'red'; 
    }

     else if (count>19)
    {
        label2.innerText = `Stop please`;
        label.style.color = 'red'; 
    }
    else if(count>9)
    {
        label.innerText = `Число ${count}`;
    }
   
    else
    {
        label.innerText = `Цифра ${count}`;
    }
    
}
)
buttonres.addEventListener('click',function()
{
    location.reload();
}
)






