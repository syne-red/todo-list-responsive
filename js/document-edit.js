var DocumentEdit = (function () {
    function init() {
    }

    function updateTodoList(todos) {
        // update todo list
    }
    // adds a todo to the HTML
    function addTodo(todo) {

        // prepend the todo to the top of the list
        $(TodoList).prepend(
            '<article data-id="' + todo.id + '">' +
            '<h3 class="title-h3">' + todo.title + 
            '</h3>' +
            '</article>');

        // get the li that was prepended to html and store it in a variable
        let li = $('article[data-id=' + todo.id + ']');

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