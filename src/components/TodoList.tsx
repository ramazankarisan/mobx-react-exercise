import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { observer } from "mobx-react";
import store, { Todo } from "../store"
function TodoListItems() {
  return (
    <>
      {store.todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={()=> todo.done = !todo.done} />
          <Input mx={2} Value={todo.text} onChange={e => todo.text = e.target.value}/>
          <Button onClick={() => store.removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

const TodoListItemObserver = observer(TodoListItems);

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItemObserver />
    </>
  );
}

export default TodoList;
