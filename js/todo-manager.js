var TodoManager = (function () {

    // Create a todo with a given title
    function createTodo() {
        let todo = {
            id: new Date().getTime(), // generate a unique id from current UTC time in milliseconds (as long as todo's arent created too fast)
            title: title,
            completed: false,
            deleted: false
        };

        return todo;
    }

    return {
        createTodo
    }
})();