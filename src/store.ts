import { makeAutoObservable } from "mobx";

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

 const handleAddTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];


class Store {
  todos : Todo[]= [];
  newTodo: string = "";

  constructor() {
    makeAutoObservable(this)
  }

  addTodo() {
    this.todos = handleAddTodo(this.todos, this.newTodo)
    this.newTodo = ""
  }

  removeTodo(id: number){
    this.todos = removeTodo(this.todos, id)
  }
}

const store = new Store();

export default store;