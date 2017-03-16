import dispatcher from "../dispatcher"
import axios from "axios"
export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodos() {
    dispatcher.dispatch({ type: "FETCH_TODOS" })
    axios.get("http://localhost:3004/db").then((data) => {
        console.log("DATA RECEIVED = ", data.data.todos)
        dispatcher.dispatch({ type: "RECEIVE_TODOS", todos: data.data.todos })
    })
    if (false) {
        dispatcher.dispatch({ type: "FETCH_TODOS_ERROR" })
    }
}

export function getTodo(id) {
    dispatcher.dispatch({ type: "FETCH_TODOS" })
    axios.get("http://localhost:3004/todos", {
        params: {
            "id": id,
        }
    }).then((data) => {
        console.log("DATA RECEIVED = ", data.data)
        dispatcher.dispatch({ type: "RECEIVE_TODOS", todos: data.data })
    }).catch(function (error) {
        console.log("received server error!", error);
    });
}