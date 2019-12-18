var EventHandler = (function () {
    function init() {
        /*
        $(TodoListInputAddButton).click(function () {
            const todoListText = $(TodoListInputTextBox).val();
            
            $(TodoList).append(
                '<li>' +
                '<span class="check"><i class="far fa-square"></i></span>' +
                '<input class="todo-title" type="text" name="title" value="' + todoListText + '">' +
                '<span class="delete"><i class="fas fa-trash"></i></span>' +
                '<span class="edit"><i class="fas fa-edit"></i></span>' +
                '</li>');
        })
        */

        $(TodoListInputAddButton).click(function () {
            const todoListText = $(TodoListInputTextBox).val();

            $(TodoList).append (
                '<article class="list-box">' + 
                '<h3 class="title-h3">'+ todoListText + '</h3>' +
                '<button type="button" class="done">DONE</button>' +
                '<button type="button" class="delete">DELETE</button>' +
                '</article>'
            )
        })
    }

    function onUserLoggedIn(user) {
        DocumentEdit.updateTodoList(user.todos);
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
        $("#home").click(function(){
            $("#todo-add").fadeOut("fast", function(){
              $("#todo-main").fadeIn();
            });
        });
    }

    return {
        init,
        onAddTodoClicked,
        switchToHomePage
    }
})();