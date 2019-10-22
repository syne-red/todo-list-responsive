var EventHandler = (function () {
    function init() {
        DocumentEdit.setWelcomeMessage('Hello World from JavaScript');
    }

    return {
        init
    }
})();

var DocumentEdit = (function () {
    function init() {
    }

    function setWelcomeMessage(msg) {
        const welcomeMsgParagraph = document.getElementById('welcome-msg');
        welcomeMsgParagraph.innerText = msg;
    }

    return {
        init,
        setWelcomeMessage
    }
})();

document.addEventListener('DOMContentLoaded', function () {
    DocumentEdit.init();
    EventHandler.init();
})