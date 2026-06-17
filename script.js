const body = document.body;
const theme = document.querySelector("#theme");

const search = document.querySelector("#search");

const tags = document.querySelector("#tags");

const taskAdd = document.querySelector("#taskAdd");

const hero = document.querySelector("#hero");

const formDiv = document.querySelector('#form');
const form = document.querySelector('form');
const cancel = document.querySelector('#cancel');

const formTitle = document.querySelector('#formTitle');
const formDescription = document.querySelector('#formDescription');
const formTags = document.querySelector('#formTags');

const submit = document.querySelector('#submit');



let tagsArr = [
    { tag: 'Normal', color: 'green' },
    { tag: 'Urgent', color: 'orange' },
    { tag: 'Important', color: 'red' }
];
function tagType(tag, color) {
    this.tag = tag;
    this.color = color;
}

let tasks = [
    // {
    //     title: 'Task 1',
    //     description: 'Description 1',
    //     tags: { tag: 'Normal', color: 'green' }
    // },
    // {
    //     title: 'Task 2',
    //     description: 'Description 2',
    //     tags: { tag: 'Urgent', color: 'orange' }
    // },
    // {
    //     title: 'Task 3',
    //     description: 'Description 3',
    //     tags: { tag: 'Important', color: 'red' }
    // }
];
function task(title, description, tags) {
    this.title = title;
    this.description = description;
    this.tags = new tagType(tags.tag, tags.color);
}



function card(index, title, description, tag, tagColor) {
    return `
        <div class="card">
            <h3 class="title">${title}</h3>
            <p class="description">${description}</p>
            <div class="tags">
                <span class="${tag}" style="background-color: ${tagColor};">${tag}</span>
            </div>
            <div class="card-btns">
                <i class="ri-edit-box-line edit" onclick="edit(${index})"></i>
                <i class="ri-delete-bin-6-line delete" onclick="del(${index})"></i>
            </div>
        </div>
    `
}

function themeToggler() {
    theme.innerHTML = (body.classList.toggle("dark"))
        ? '<i class="ri-moon-line"></i>' : '<i class="ri-sun-line"></i>';
}

function loadTasks(paramTasks=tasks) {
    hero.innerHTML = '';
    if (paramTasks.length >= 0) {
        paramTasks.forEach(({ title, description, tags }, index) => {
            hero.innerHTML += card(index, title, description, tags.tag, tags.color);
        });
    }
}
function searchTask() {
    let paramTasks = tasks.filter(({ title, tags }) => { 
        if (tags.value === ""  && search.value.trim() === "") return true;  
        else if (tags.value === ""  && search.value.trim() !== "") 
            return title.toLowerCase().includes(search.value.toLowerCase());  
        else if (tags.value !== ""  && search.value.trim() === "") 
            return tags.tag === tags.value; 
        else 
        return tags.tag === tags.value && title.toLowerCase().includes(search.value.toLowerCase());  
    });
    loadTasks(paramTasks);
}

function loadForm(index = -1) {
    formDiv.style.display = 'flex';
    form.reset();

    if (index < 0) {
        formTags.value = tagsArr[0].tag;

        formTags.style.backgroundColor = tagsArr[0].color;

        submit.innerHTML = 'SUBMIT';
        formTitle.focus();
    }
    else {
        let task = tasks[index];
        formTitle.value = task.title;
        formDescription.value = task.description;
        formTags.value = task.tags.tag;

        formTags.style.backgroundColor = task.tags.color;

        submit.innerHTML = 'UPDATE';
        formTitle.focus();

        tasks.splice(index, 1);
    }
}


function edit(index) { 
    loadForm(index); 
}
function del(index) {
    let consent = confirm('Are you sure you want to delete this task?');
    if (!consent) return;
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}


function preLoad() {
    if (localStorage.getItem("tasks")) {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    
    let str = '<option value="">All<option>'; 
    tagsArr.forEach(({ tag }) => { str += `<option value="${tag}">${tag}</option>`; });
    tags.innerHTML = str;


    themeToggler();
    loadTasks();
}

preLoad();


theme.addEventListener("click", themeToggler);

search.addEventListener('keyup', () => { searchTask(); });

// tags.addEventListener('mouseleaven', () => { searchTask(); });

taskAdd.addEventListener('click', () => { loadForm(); });

cancel.addEventListener('click', (e) => {
    formDiv.style.display = 'none';
    form.reset();
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let title = formTitle.value;
    let description = formDescription.value;
    let tag = formTags.value;
    let color = tagsArr[tagsArr.findIndex(e => e.tag === tag)].color;

    if (title === '' || description === '' || tag === '') return alert('Please fill all the fields'); 

    let taskTag = new tagType(tag, color);
    let newTask = new task(title, description, taskTag);
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
    formDiv.style.display = 'none';
    form.reset();
});

