//#region select tags
const body = document.body;

const main = document.querySelector("main");

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
//#endregion select tags


let tagsArr = [
    { tag: 'Normal', color: 'rgb(47, 164, 59)' },
    { tag: 'Urgent', color: 'rgb(261, 140, 4)' },
    { tag: 'Important', color: 'rgb(238, 1, 3)' }
];
function tagType(tag, color) {
    this.tag = tag;
    this.color = color;
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [ 
    {
        title: 'Task 1',
        description: 'Description 1',
        tags: { tag: 'Normal', color: 'green' }
    },
    {
        title: 'Task 2',
        description: 'Description 2',
        tags: { tag: 'Urgent', color: 'orange' }
    },
    {
        title: 'Task 3',
        description: 'Description 3',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    },
    {
        title: 'Task 5',
        description: 'Description 4 loLorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias quos ducimus laboriosam, iure dolorum ipsa dolorem doloremque corrupti provident hic ea quaerat sapiente magni aliquid blanditiis beatae excepturi iusto suscipit dignissimos. Cumque harum molestiae in, dolore incidunt aliquam iure officia illo veritatis error? Quia dolore libero illum nisi ullam.rem50',
        tags: { tag: 'Important', color: 'red' }
    }
];
function task(title, description, tags) {
    this.title = title;
    this.description = description;
    this.tags = new tagType(tags.tag, tags.color);
}


function card(index, title, description, tag, tagColor) {
    title =  (title.length > 10 ? title.substring(0, 10) + '...' : title);

    return `
        <div class="card">
            <div class="card-top">
                <h3 class="title">${title}</h3>
                <input type="checkbox" name="select" id="select" />
            </div>
            <p class="description">${description}</p>
            <div class="tags">
                <span class="${tag} card-tag-${index}" style="background-color: ${tagColor};">${tag}</span>
            </div>
            <div class="card-btns">
                <i class="ri-edit-box-line edit" onclick="edit(${index})"></i>
                <i class="ri-delete-bin-6-line delete" onclick="del(${index})"></i>
            </div>
        </div>
    `;
}

function themeToggler() {
    theme.innerHTML = (body.classList.toggle("dark"))
        ? '<i class="ri-moon-line"></i>' 
        : '<i class="ri-sun-line"></i>';
        
}
function loadTags() {
    let str = '<option value="">All</option>'; 

    tags.innerHTML = '';
    tags.innerHTML = str;
    
    str = "";
    tagsArr.forEach(({ tag, color }) => { 
        str += `<option value="${tag}" style="background-color: ${color};">${tag}</option>`; 
    });
    tags.innerHTML += str;

    formTags.innerHTML = ''; 
    formTags.innerHTML = str;
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
    const selectedTag = tags.value;
    const searchText = search.value.trim().toLowerCase();

    const paramTasks = tasks.filter(task => {
        if (selectedTag === "" && searchText === "") return true;
        if (selectedTag === "" && searchText !== "") return task.title.toLowerCase().includes(searchText); 
        if (selectedTag !== "" && searchText === "") return task.tags.tag === selectedTag;
        return task.tags.tag === selectedTag && task.title.toLowerCase().includes(searchText); 
    });

    loadTasks(paramTasks);
}

function clearSearch() {
    search.value = '';
    tags.value = '';
    loadTasks();
}


function loadForm(index = -1) {
    form.reset();
    formDiv.style.display = 'flex';

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
    loadTags(); 
    themeToggler(); 
    loadTasks();
}

preLoad();


theme.addEventListener("click", themeToggler);
search.addEventListener('keyup', () => { searchTask(); });
tags.addEventListener('change', () => { searchTask(); });
taskAdd.addEventListener('click', () => { loadForm(); });
formTags.addEventListener('change', () => {
    formTags.style.backgroundColor = tagsArr[tagsArr.findIndex(e => e.tag === formTags.value)].color;    
});
cancel.addEventListener('click', (e) => {
    formDiv.style.display = 'none';
    form.reset();   
    clearSearch();
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
    tasks.unshift(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
    formDiv.style.display = 'none';
    form.reset();
    clearSearch();
});
