var EventHandler = (function () {
    function init() {

        $(TodoListInputAddButton).click(function () {
            const todoListText = $(TodoListInputTextBox).val();
            $(TodoListInputTextBox).val("");

            let todo = {
                id: new Date().getTime(), // generate a unique id from current UTC time in milliseconds (as long as todo's arent created too fast)
                title: todoListText,
                completed: false,
                deleted: false
            };

            $(TodoList).append(
                '<article data-id="'+ todo.id +'" class="list-box">' +
                '<h3 class="title-h3">' + todoListText + '</h3>' +
                '<button type="button" class="done" onclick="EventHandler.deleteTodo(' + todo.id + ')">DONE</button>' +
                '</article>'
            )

            LocalStorageManager.addTodo(todo);

            switchToHomePage();

        });

        const todos = LocalStorageManager.getAllTodos();

        todos.forEach(todo => {
            $(TodoList).append(
                '<article data-id="'+ todo.id +'" class="list-box">' +
                '<h3 class="title-h3">' + todo.title + '</h3>' +
                '<button type="button" class="done" onclick="EventHandler.deleteTodo(' + todo.id + ')">DONE</button>' +
                '</article>'
            )
        });
    }

    function deleteTodo(id) {
        let todos = LocalStorageManager.getAllTodos();

        for (let i = 0; i < todos.length; i++) {
            let todo = todos[i];

            if (todo.id === id) {
                todos.splice(i, 1);
                
                break;
            }
        }

        $('article[data-id="' + id + '"]').remove();

        LocalStorageManager.getStorage().todos = todos;
        LocalStorageManager.save();
        
    }

    // when enter is pressed or the + button, this event is ran
    function onAddTodoClicked() {
        // get the todo list text
        const todoListText = $(TodoListInputTextBox).val();

        // check that the todo list text is not empty
        if (todoListText.length !== 0) {

            // clear the user input box
            $(TodoListInputTextBox).val('');

            // create a new todo
            let todo = TodoManager.createTodo(todoListText);

            // also add the todo to the HTML
            DocumentEdit.addTodo(todo);
        }
    }

    function switchToHomePage() {
        $("#todo-add").fadeOut("fast", function () {
            $("#todo-main").fadeIn();
        });
    }

    return {
        init,
        onAddTodoClicked,
        switchToHomePage,
        deleteTodo
    }
})();