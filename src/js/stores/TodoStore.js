import { EventEmitter } from "events";

import dispatcher from "../dispatcher"

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [{
            id: 1111,
            text: "Go shopping",
            complete: false
        },
        {
            id: 2222,
            text: "Pay Water Bill",
            complete: false
        },
        ]
    }
    getAll() {
        return this.todos;
    }

    createTodo(text) {
        const id = Date.now()
        this.todos.push({
            id,
            text,
            complete: false,
        });
        this.emit("change");
    }
    handleActions(action) {
        console.log("Todostore received an action", action.todos)
        switch (action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
            case "RECEIVE_TODOS": {
                this.todos = action.todos;
                this.emit("change");
            }
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore))
window.dispatcher = dispatcher;
export default todoStore;