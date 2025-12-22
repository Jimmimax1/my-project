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

const butshow5 = document.getElementById('showBtn-5')
const butimage5 = document.getElementById('butimage-5')
const input6 = document.querySelector('.input6'); 
// const butshow6 = document.getElementById('showBtn-6')
const butimage6 = document.getElementById('butimage-6')

const input7 = document.querySelector('.input7'); 
// const butshow7 = document.getElementById('showBtn-7')
const butimage7 = document.getElementById('butimage-7')


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

butshow5.addEventListener('click', () => {
    const file5 = document.querySelector('input[type="file"].input5').files[0];
    butimage5.innerHTML = `<img src="${URL.createObjectURL(file5)}" width="300" height="250" style="object-fit: contain;">`;
}
)

input6.addEventListener('change', () => {
    const file6 = document.querySelector('input[type="file"].input6').files[0];
    butimage6.innerHTML = `<img src="${URL.createObjectURL(file6)}" width="300" height="250" style="object-fit: contain;">`;
}
)
// Вешаем обработчик события 'change' на input
// Событие срабатывает когда пользователь ВЫБИРАЕТ файл
input7.addEventListener('change', () => {
    const file7 = input7.files[0]; // используем уже найденный элемент
       // Проверяем, что файл действительно выбран (не undefined)
    if (file7) {
          // Создаем временный URL для выбранного файла
        // Это нужно потому что нельзя просто указать путь к локальному файлу
        const imageUrl = URL.createObjectURL(file7);
        // Вставляем HTML с тегом img в кнопку
        // src="${imageUrl}" - используем созданный временный URL
        butimage7.innerHTML = `<img src="${imageUrl}" width="300" height="250" style="object-fit: contain;">`;      
    }
});

function showPage() {
  document.body.innerHTML = `
    <h1>Hello World!</h1>
    <p>Это полностью новая страница</p>
    <button onclick="goBack()">← Назад</button>
  `;
}

function goBack() {
  location.reload(); // Просто перезагружаем страницу
}


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






