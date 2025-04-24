# Web-Development-Project-Interactive-Contact-Form-To-Do-List-Gallery-tast2-

# Web Development Project: Interactive Contact Form, To-Do List & Gallery

A comprehensive web development project demonstrating intermediate HTML, CSS, and JavaScript skills including form validation, responsive design, and DOM manipulation.

![image](https://github.com/user-attachments/assets/6821568a-f822-4701-afd0-9911511ca325)


## 📋 Project Overview

This project includes three main components that showcase different web development skills:

1. **Contact Form with Validation** - A responsive form with client-side validation
2. **Dynamic To-Do List** - A fully interactive task manager with local storage
3. **Interactive Image Gallery** - A responsive gallery with lightbox functionality

## 🚀 Features

### Contact Form
- Multiple input types (text, email, select, textarea)
- Real-time form validation
- Visual feedback for validation errors
- Success message on valid submission
- Responsive design for all screen sizes

### To-Do List
- Add, complete, and delete tasks
- Task counter showing total and completed tasks
- Button to clear all completed tasks
- Persistent storage using localStorage
- Beautiful animations for adding/removing tasks

### Image Gallery
- Responsive grid layout
- Image upload capability
- Lightbox for full-screen image viewing
- Hover effects showing image titles
- Clean and intuitive UI

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS variables, Flexbox and Grid
- **JavaScript** - DOM manipulation and event handling
- **localStorage API** - For persistent data storage

## 📁 Project Structure

```
project/
├── index.html         # Main HTML document
├── styles.css         # CSS styling
├── script.js          # JavaScript functionality
└── README.md          # Project documentation
```

## 💻 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/web-development-project.git
   ```

2. Open `index.html` in your web browser.

No additional dependencies or build steps are required!

## 🔧 Implementation Details

### HTML Structure
- Semantic HTML5 tags for better accessibility and SEO
- Properly organized sections with appropriate IDs and classes
- Responsive meta tags for mobile compatibility

### CSS Features
- CSS variables for consistent theming
- Flexbox for navigation and layout components
- CSS Grid for responsive gallery and main content
- Media queries for different screen sizes
- Animations and transitions for improved UX
- Box shadows and border effects for visual depth

### JavaScript Functionality
- Form validation with regular expressions
- DOM manipulation for dynamic content
- Event listeners for user interaction
- localStorage for data persistence
- Defensive programming with error handling

## 📱 Responsive Design

This project is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)

## 🎯 Learning Objectives Achieved

- ✅ Created a form with various input fields and styled it with CSS
- ✅ Implemented JavaScript form validation for required fields and email format
- ✅ Built responsive layouts using Flexbox and CSS Grid
- ✅ Developed dynamic content with JavaScript DOM manipulation
- ✅ Applied modern CSS techniques for visual enhancement
- ✅ Implemented data persistence with localStorage

## 🔍 Code Examples

### Form Validation

```javascript
function validateField(input, errorElement, validationFn) {
    if (validationFn(input.value)) {
        return hideError(input, errorElement);
    } else {
        return showError(input, errorElement);
    }
}
```

### Creating To-Do Items

```javascript
function createTodoElement(todoText, isCompleted = false) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    if (isCompleted) {
        todoItem.classList.add('completed');
    }
    
    // Add todo content and functionality...
    
    return todoItem;
}
```

## 🔮 Future Enhancements

- Dark mode toggle
- Form submission to a backend service
- Filter and search functionality for to-do list
- Categories for to-do items
- Drag and drop reordering for gallery images
- User authentication for personalized to-do lists

## 👨‍💻 Author

Nitish Paramanik

## 🙏 Acknowledgements

- [Font Awesome](https://fontawesome.com) - Icons
- [Unsplash](https://unsplash.com) - Sample images
- [CSS-Tricks](https://css-tricks.com) - CSS Grid and Flexbox guides
