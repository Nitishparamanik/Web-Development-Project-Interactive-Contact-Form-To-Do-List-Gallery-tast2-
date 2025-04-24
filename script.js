// DOM Elements - Contact Form
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const formSuccess = document.getElementById('form-success');

// DOM Elements - To-Do List
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');
const tasksCount = document.getElementById('tasks-count');
const clearCompletedBtn = document.getElementById('clear-completed');

// DOM Elements - Image Gallery
const gallery = document.getElementById('gallery');
const imageUpload = document.getElementById('image-upload');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');

/*
 * Form Validation Functions
 */

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to show error message
function showError(input, errorElement) {
    input.classList.add('invalid');
    errorElement.style.display = 'block';
    return false;
}

// Function to hide error message
function hideError(input, errorElement) {
    input.classList.remove('invalid');
    errorElement.style.display = 'none';
    return true;
}

// Function to validate a form field
function validateField(input, errorElement, validationFn) {
    if (validationFn(input.value)) {
        return hideError(input, errorElement);
    } else {
        return showError(input, errorElement);
    }
}

// Form submit event handler
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate form fields
    const isNameValid = validateField(nameInput, nameError, value => value.trim() !== '');
    const isEmailValid = validateField(emailInput, emailError, value => value.trim() !== '' && isValidEmail(value));
    const isMessageValid = validateField(messageInput, messageError, value => value.trim() !== '');
    
    // If all fields are valid, show success message
    if (isNameValid && isEmailValid && isMessageValid) {
        formSuccess.style.display = 'block';
        contactForm.reset();
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 3000);
    }
});

// Real-time validation on input blur
nameInput.addEventListener('blur', () => validateField(nameInput, nameError, value => value.trim() !== ''));
emailInput.addEventListener('blur', () => validateField(emailInput, emailError, value => value.trim() !== '' && isValidEmail(value)));
messageInput.addEventListener('blur', () => validateField(messageInput, messageError, value => value.trim() !== ''));

/*
 * To-Do List Functions
 */

// Initialize to-do list from localStorage if available
function initTodoList() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        const todos = JSON.parse(savedTodos);
        todos.forEach(todo => {
            createTodoElement(todo.text, todo.completed);
        });
        updateTaskCount();
    }
}

// Function to save to-do list to localStorage
function saveTodos() {
    const todos = [];
    document.querySelectorAll('.todo-item').forEach(item => {
        todos.push({
            text: item.querySelector('.todo-text').textContent,
            completed: item.classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to create a new todo item
function createTodoElement(todoText, isCompleted = false) {
    // Create todo item elements
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    if (isCompleted) {
        todoItem.classList.add('completed');
    }
    
    const todoTextSpan = document.createElement('span');
    todoTextSpan.className = 'todo-text';
    todoTextSpan.textContent = todoText;
    
    const todoActions = document.createElement('div');
    todoActions.className = 'todo-actions';
    
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = isCompleted ? 'Undo' : 'Complete';
    completeBtn.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
        completeBtn.textContent = todoItem.classList.contains('completed') ? 'Undo' : 'Complete';
        saveTodos();
        updateTaskCount();
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        todoItem.style.opacity = '0';
        setTimeout(() => {
            todoList.removeChild(todoItem);
            saveTodos();
            updateTaskCount();
        }, 300);
    });
    
    // Append elements to todo item
    todoActions.appendChild(completeBtn);
    todoActions.appendChild(deleteBtn);
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(todoActions);
    
    // Add todo item to list
    todoList.appendChild(todoItem);
    
    return todoItem;
}

// Function to add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        createTodoElement(todoText);
        todoInput.value = '';
        saveTodos();
        updateTaskCount();
    }
}

// Function to update task count
function updateTaskCount() {
    const totalTasks = document.querySelectorAll('.todo-item').length;
    const completedTasks = document.querySelectorAll('.todo-item.completed').length;
    tasksCount.textContent = `${totalTasks} tasks, ${completedTasks} completed`;
}

// Function to clear completed tasks
function clearCompleted() {
    const completedItems = document.querySelectorAll('.todo-item.completed');
    completedItems.forEach(item => {
        item.style.opacity = '0';
        setTimeout(() => {
            todoList.removeChild(item);
            saveTodos();
            updateTaskCount();
        }, 300);
    });
}

// Add event listeners for todo functionality
addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});
clearCompletedBtn.addEventListener('click', clearCompleted);

/*
 * Image Gallery Functions
 */

// Function to open lightbox
function openLightbox(imgSrc, caption) {
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close lightbox
function closeLightboxFn() {
    lightbox.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
}

// Function to handle image upload
function handleImageUpload(event) {
    const files = event.target.files;
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Only process image files
        if (!file.type.match('image.*')) {
            continue;
        }
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Create gallery item
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            // Create image
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            
            // Create overlay
            const overlay = document.createElement('div');
            overlay.className = 'image-overlay';
            
            // Create title
            const title = document.createElement('span');
            title.className = 'image-title';
            title.textContent = file.name.split('.')[0]; // Use filename as title
            
            // Append elements
            overlay.appendChild(title);
            galleryItem.appendChild(img);
            galleryItem.appendChild(overlay);
            
            // Add click event to open lightbox
            galleryItem.addEventListener('click', function() {
                openLightbox(img.src, title.textContent);
            });
            
            // Add to gallery
            gallery.appendChild(galleryItem);
        };
        
        // Read the image file as a data URL
        reader.readAsDataURL(file);
    }
}

// Add event listeners for gallery functionality
Array.from(document.querySelectorAll('.gallery-item')).forEach(item => {
    const img = item.querySelector('img');
    const title = item.querySelector('.image-title');
    
    item.addEventListener('click', function() {
        openLightbox(img.src, title.textContent);
    });
});

imageUpload.addEventListener('change', handleImageUpload);
closeLightbox.addEventListener('click', closeLightboxFn);
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightboxFn();
    }
});

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initTodoList();
    updateTaskCount();
});