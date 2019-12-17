var DocumentEdit = (function () {
    function init() {
    }

    function updateTodoList(todos) {
        // update todo list
    }
    // adds a todo to the HTML
    function addTodo(todo) {

        // determine what FontAwesome icon to use, if the todo is completed the fa-check-square is used, otherwise fa-square is used
        let overlineClass = '';

        if (todo.completed) {
            checkBoxClass = 'fa-check-square';
            overlineClass = 'text-overline';
            markedStyle = 'order:1; opacity:0.5;';
        }

        // prepend the todo to the top of the list
        $(TodoList).prepend(
            '<li data-id="' + todo.id + '">' +
            '<input class="todo-title ' + overlineClass + '" type="text" name="title" value="' + todo.title + '">' +
            '</li>');

        // get the li that was prepended to html and store it in a variable
        let li = $('li[data-id=' + todo.id + ']');

        // if the todo is completed
        if (todo.completed) {

            // find the todo title text field and add the text-overline class and set it to readonly
            li.find('.todo-title')
                .prop('readonly', true);
        }

        // bind the html stuff like editing todo, completing and deleting
        EventHandler.bindTodoEvents(todo.id);
    }

    return {
        init,
        updateTodoList,
        addTodo
    }
})();