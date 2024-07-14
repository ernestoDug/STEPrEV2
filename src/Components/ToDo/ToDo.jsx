import { useState } from "react";

import List from "../List/List";
import Button from "../Button/Button";

import toDoStyle from "./ToDo.module.css";
import { nanoid } from "nanoid";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const changerTask = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevState) => [...prevState, newTask]);
      // чистка
      setNewTask("");
    }
  };

  const delTask = (index) => {
    const updateTask = tasks.filter((_, i) => i !== index);
    setTasks(updateTask);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updateTask = [...tasks];
      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];
      setTasks(updateTask);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updateTask = [...tasks];
      [updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ];
      setTasks(updateTask);
    }
  };

  // const for render

  const wrapTask = (
    <div>
      <h1>Я планую...</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Новий план..."
          onChange={changerTask}
        />

        <Button
          nameBtn={"Додати план"}
          clickProps={addTask}
          classNameProps={toDoStyle.btnToDoAdd}
          idProps={"buttonTodoAdd"}
        />
      </div>
      <ol>
        {tasks.map((task, index) => (
          <List key={nanoid()} id={index}>
            <span>{task}</span>
            <Button
              nameBtn={"Видалити план"}
              clickProps={() => delTask(index)}
              classNameProps={toDoStyle.btnToDoDel}
              idProps={"buttonTodoAdd"}
            />
            <Button
              nameBtn={"Вгору"}
              clickProps={() => moveTaskUp(index)}
              classNameProps={toDoStyle.btnToDoAdd}
              idProps={"buttonTodomoveUp"}
            />

            <Button
              nameBtn={"ВНиз"}
              clickProps={() => moveTaskDown(index)}
              classNameProps={toDoStyle.btnToDoAd}
              idProps={"buttonTodomoveDown"}
            />
          </List>
        ))}
      </ol>
    </div>
  );

  return <>{wrapTask}</>;
};

export default ToDo;
