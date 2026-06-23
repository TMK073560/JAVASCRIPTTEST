// 1. Selección de elementos del DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const errorMessage = document.getElementById('error-message');
const todoList = document.getElementById('todo-list');

// 2. Estado de la aplicación (Array de objetos)
let todos = [];

// 3. Función para renderizar las tareas en el DOM
const renderTodos = () => {
    todoList.innerHTML = ''; // Limpiar la lista antes de volver a renderizar

    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        if (todo.completed) {
            li.classList.add('completed');
        }

        // Crear el texto de la tarea
        const span = document.createElement('span');
        span.textContent = todo.text;
        li.appendChild(span);

        // Evento para marcar como completada (Uso de classList.toggle)
        li.addEventListener('click', () => {
            todo.completed = !todo.completed; // Alternar estado en el objeto
            li.classList.toggle('completed');  // Alternar clase en el DOM
        });

        todoList.appendChild(li);
    });
};

// 4. Manejador del Formulario (Agregar tarea + Validación)
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar que la página se recargue

    const textValue = todoInput.value.trim();

    // Validación
    if (textValue === '') {
        errorMessage.textContent = 'Por favor, escribe una tarea válida.';
        errorMessage.classList.remove('error-hidden');
        return;
    }

    // Ocultar error si la validación pasa
    errorMessage.textContent = '';
    errorMessage.classList.add('error-hidden');

    // Guardar en el array de objetos
    const newTodo = {
        id: Date.now(),
        text: textValue,
        completed: false
    };

    todos.push(newTodo);

    // Renderizar y limpiar input
    renderTodos();
    todoForm.reset();
});
