// Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.


let div = document.createElement('div');
let p = document.createElement('p');
let textarea = document.createElement('textarea');
let text = 'Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.';
p.innerText = text;
div.appendChild(p);
document.body.appendChild(div);
let switcher = 'div';

document.body.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.code == 'KeyE' && switcher == 'div') {
        e.preventDefault();
        toTextarea();
    }
    if (e.ctrlKey && e.code == 'Equal' && switcher == 'textarea') {
        e.preventDefault();
        toDiv();
    }
});

function toTextarea () {
    textarea.innerText = p.innerText;
    div.replaceChild(textarea, p);
    switcher = 'textarea';
}

function toDiv () {
    p.innerText = textarea.value;
    div.replaceChild(p, textarea);
    switcher = 'div';
}
