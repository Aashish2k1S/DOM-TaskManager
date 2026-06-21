//#region select tags
const body = document.body;

const main = document.querySelector("main");

const theme = document.querySelector("#theme");

const search = document.querySelector("#search");

const tags = document.querySelector("#tags");

const taskAdd = document.querySelector("#taskAdd");

const pendingCount = document.querySelector("#pendingCount");
const completeCount = document.querySelector("#completeCount");

const delAllTasks = document.querySelector("#delAllTasks");

const hero = document.querySelector("#hero");

const formDiv = document.querySelector('#form');
const form = document.querySelector('form');
const cancel = document.querySelector('#cancel');

const formId = document.querySelector('#formId');
const formTitle = document.querySelector('#formTitle');
const formDescription = document.querySelector('#formDescription');
const formTags = document.querySelector('#formTags');

const submit = document.querySelector('#submit');
//#endregion select tags


// localStorage.removeItem("tasks")

if (!localStorage.getItem("isDarkMode"))
    localStorage.setItem('isDarkMode', JSON.stringify(window.matchMedia('(prefers-color-scheme: dark)').matches));


const isDarkMode = Boolean(JSON.parse(localStorage.getItem("isDarkMode")));


function TagType(tag, color) {
    this.tag = tag;
    this.color = color;
}
let tagsArr = [
    { tag: 'Normal', color: 'rgb(47, 164, 59)' },
    { tag: 'Urgent', color: 'rgb(261, 140, 4)' },
    { tag: 'Important', color: 'rgb(238, 1, 3)' }
];

function Task(id, title, description, tags, isComplete) {
    this.id = id
    this.title = title;
    this.description = description;
    this.tags = new TagType(tags.tag, tags.color);
    this.isComplete = isComplete;
}
let tasks = JSON.parse(localStorage.getItem("tasks")) || [
    { id: 1, title: 'Buy groceries', description: 'Milk, bread, eggs, and coffee.', tags: { tag: 'Normal', color: 'rgb(47, 164, 59)' }, isComplete: false },
    { id: 2, title: 'Email client', description: 'Send project proposal update.', tags: { tag: 'Urgent', color: 'rgb(251, 140, 4)' }, isComplete: false },
    { id: 3, title: 'Fix CSS bug', description: 'Resolve header alignment issue on mobile.', tags: { tag: 'Important', color: 'rgb(238, 1, 3)' }, isComplete: true },
    { id: 4, title: 'Gym session', description: 'Upper body workout at 6 PM.', tags: { tag: 'Normal', color: 'rgb(47, 164, 59)' }, isComplete: false },
    { id: 5, title: 'Team meeting', description: 'Weekly sync with the design team.', tags: { tag: 'Important', color: 'rgb(238, 1, 3)' }, isComplete: false },
    { id: 6, title: 'Read book', description: 'Complete chapter 5 of Atomic Habits.', tags: { tag: 'Normal', color: 'rgb(47, 164, 59)' }, isComplete: true },
    { id: 7, title: 'Update portfolio', description: 'Add new project screenshots.', tags: { tag: 'Important', color: 'rgb(238, 1, 3)' }, isComplete: false },
    { id: 8, title: 'Call dentist', description: 'Schedule annual checkup.', tags: { tag: 'Urgent', color: 'rgb(251, 140, 4)' }, isComplete: false },
    { id: 9, title: 'Review PRs', description: 'Check code for the auth module.', tags: { tag: 'Important', color: 'rgb(238, 1, 3)' }, isComplete: false },
    { id: 10, title: 'Plan weekend', description: 'Organize camping trip details.', tags: { tag: 'Normal', color: 'rgb(47, 164, 59)' }, isComplete: false },
    { id: 11, title: 'Organize files', description: 'Clean up desktop and downloads folder.', tags: { tag: 'Normal', color: 'rgb(47, 164, 59)' }, isComplete: true },
    { id: 12, title: 'Pay bills', description: 'Electricity and internet bills due.', tags: { tag: 'Urgent', color: 'rgb(251, 140, 4)' }, isComplete: false },
    { id: 13, title: 'Write blog post', description: 'Draft article about event delegation.', tags: { tag: 'Important', color: 'rgb(238, 1, 3)' }, isComplete: false },
    { id: 14, title: 'Water plants', description: 'Check soil moisture for indoor ferns.', tags: { tag: 'Normal', color: 'rgb(47, 164, 59)' }, isComplete: false },
    { id: 15, title: 'Submit report', description: 'Monthly performance metrics.', tags: { tag: 'Urgent', color: 'rgb(251, 140, 4)' }, isComplete: false },
    { id: 16, title: 'Update Resume', description: 'Add latest project experience.', tags: { tag: 'Important', color: 'rgb(238, 1, 3)' }, isComplete: false },
    { id: 17, title: 'Laundry', description: 'Wash and fold clothes.', tags: { tag: 'Normal', color: 'rgb(47, 164, 59)' }, isComplete: true },
    { id: 18, title: 'Prepare presentation', description: 'Create slides for the demo.', tags: { tag: 'Important', color: 'rgb(238, 1, 3)' }, isComplete: false },
    { id: 19, title: 'Backup data', description: 'Upload important files to cloud.', tags: { tag: 'Urgent', color: 'rgb(251, 140, 4)' }, isComplete: false },
    { id: 20, title: 'Meditate', description: '15 minutes of mindfulness practice.', tags: { tag: 'Normal', color: 'rgb(47, 164, 59)' }, isComplete: false }
];

if (!localStorage.getItem("tasks")) localStorage.setItem("tasks", JSON.stringify(tasks));


function card(index, id, title, description, tag, tagColor, isComplete) {
    title = (title.length > 10 ? title.substring(0, 10) + '...' : title);

    return `
        <div class="card ${isComplete ? "completed" : ""}"> 
            <div class="card-top"> 
                <h3 class="title" data-id="${id}" data-status="${isComplete}" data-Tag="${tag}">${title}</h3> 
                <input type="checkbox" name="select" class="select" 
                ${isComplete ? "checked" : ""} 
                data-id="${id}" data-status="${isComplete}" data-Tag="${tag}"/> 
            </div> 
            <p class="description"
            data-id="${id}" data-status="${isComplete}" data-Tag="${tag}">${description}</p> 
            <div class="tags"> 
                <span class="${tag} card-tag-${index}" style="background-color: ${tagColor};"
                data-id="${id}" data-status="${isComplete}" data-Tag="${tag}"
                >${tag}</span> 
            </div> 
            <div class="card-btns"> 
                <i class="ri-edit-box-line edit" data-id="${id}" data-status="${isComplete}" data-Tag="${tag}"></i> 
                <i class="ri-delete-bin-6-line delete" data-id="${id}" data-status="${isComplete}" data-Tag="${tag}"></i> 
            </div> 
        </div> 
    `;
}



function themeToggler() {
    let isDarkMode = body.classList.toggle("dark");
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    theme.innerHTML = (isDarkMode) ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>';
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

function updateCounters() {
    let pCnt = 0, cCnt = 0;

    tasks.forEach(task => {
        (task.isComplete) ? cCnt++ : pCnt++;
    });

    pendingCount.innerHTML = (pCnt <= 99 ? pCnt : "99+");
    completeCount.innerHTML = (cCnt <= 99 ? cCnt : "99+");
}

function loadTasks(paramTasks = tasks) {
    hero.innerHTML = '';

    if (paramTasks.length >= 0) {
        paramTasks.forEach(({ id, title, description, tags, isComplete }, index) => {
            hero.innerHTML += card(index, id, title, description, tags.tag, tags.color, isComplete);
        });
    }

    updateCounters();
}

function searchTask() {
    const selectedTag = tags.value;
    const searchText = search.value.trim().toLowerCase();

    const paramTasks = tasks.filter(task => {
        if (selectedTag === "" && searchText === "") return true;
        if (selectedTag === "" && searchText !== "") return (task.title.toLowerCase().includes(searchText) || task.description.toLowerCase().includes(searchText));
        if (selectedTag !== "" && searchText === "") return task.tags.tag === selectedTag;
        return task.tags.tag === selectedTag && (task.title.toLowerCase().includes(searchText) || task.description.toLowerCase().includes(searchText));
    });

    loadTasks(paramTasks);
}

function clearSearch() {
    search.value = '';
    tags.value = '';
    tasks = JSON.parse(localStorage.getItem('tasks'));
    loadTasks();
}


function loadForm(index = -1) {
    form.reset();
    formDiv.style.display = 'flex';

    if (index < 0) {
        formId.value = "0";
        formTags.value = tagsArr[0].tag;

        formTags.style.backgroundColor = tagsArr[0].color;

        submit.innerHTML = 'SUBMIT';
        formTitle.focus();
    }
    else {
        let task = tasks[index];
        formId.value = task.id;
        formTitle.value = task.title;
        formDescription.value = task.description;
        formTags.value = task.tags.tag;

        formTags.style.backgroundColor = task.tags.color;

        submit.innerHTML = 'UPDATE';
        formTitle.focus();

        tasks.splice(index, 1);
    }
}


function edit(e) {
    const id = parseInt(e.target.dataset.id);
    console.log(`edit id: ${id}`);
    let index = tasks.findIndex(task => task.id === id);
    console.log(`edit index: ${index}`);

    // console.log(id);
    // console.log(index); 
    loadForm(index);
}
function del(e) {
    const id = parseInt(e.target.dataset.id);
    let consent = confirm('Are you sure you want to delete this task?');
    if (!consent) return;
    let index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    searchTask();
}
function delAllTask() {
    if (tasks.length <= 0) return alert('No Task Found...');
    let consent = confirm('Are you sure that you want to delete all tasks?');
    if (!consent) return;
    tasks = [];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}
function complete(e) {
    const taskId = parseInt(e.target.dataset.id);

    const index = tasks.findIndex(task => task.id === taskId);
    if (index === -1) return;

    const isComplete = e.target.checked;
    tasks[index].isComplete = isComplete;
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const cardEl = e.target.closest('.card');
    if (isComplete) cardEl.classList.add("completed");
    else cardEl.classList.remove("completed");

    updateCounters();
}

function submitForm(e) {
    let id = parseInt(formId.value);
    console.log(`before id: ${id}`);

    if (!parseInt(formId.value)) {
        let arr = [];
        tasks.forEach(task => arr.push(task.id));
        id = Math.max(...arr) + 1;
        console.log(`before with arr id: ${id}`);
    }

    // let title = formTitle.getAttribute("value");
    let title = formTitle.value;
    // console.log(`title: ${title}`);

    // let description = formDescription.getAttribute("value");
    let description = formDescription.value;
    // console.log(`description: ${description}`);

    let tag = formTags.value;
    let color = tagsArr[tagsArr.findIndex(e => e.tag === tag)].color;

    if (title === '' || description === '' || tag === '') return alert('Please fill all the fields');

    let taskTag = new TagType(tag, color);
    let newTask = new Task(id, title, description, taskTag, false);
    tasks.unshift(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
    formDiv.style.display = 'none';
    form.reset();
    clearSearch();

    console.log(`after id: ${id}`);
}

function cancelForm() {
    formDiv.style.display = 'none';
    form.reset();
    clearSearch();
}


function preLoad() {
    loadTags();
    if (isDarkMode) themeToggler();
    loadTasks();
}

preLoad();


theme.addEventListener("click", themeToggler);
search.addEventListener('keyup', searchTask);
tags.addEventListener('change', searchTask);
taskAdd.addEventListener('click', () => { loadForm(); });
delAllTasks.addEventListener('click', delAllTask);

formTags.addEventListener('change', () => {
    formTags.style.backgroundColor = tagsArr[tagsArr.findIndex(e => e.tag === formTags.value)].color;
});

cancel.addEventListener('click', cancelForm);
submit.addEventListener('click', (e) => {
    e.preventDefault();
    submitForm(e);
});

hero.addEventListener('change', (e) => {
    if (e.target.classList.contains('select')) complete(e);
});


hero.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')) edit(e);
    if (e.target.classList.contains('delete')) del(e);
});

