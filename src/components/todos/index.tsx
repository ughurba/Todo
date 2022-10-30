import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { Accordions } from "../accordions";
import { Title, Wrapper } from "./style";

export const Todos = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTask, setFilteredTask] = useState<Task[]>([]);
  const [filter, setFilter] = useState<boolean | undefined>();

  const handleCompletedClick = (task: Task) => {
    const existTask = [...tasks].find((x) => task.taskName === x.taskName);
    if (existTask) {
      existTask.completed = !existTask.completed;
      setFilteredTask([...tasks]);
    }
  };

  const handleAddTask = (task: Task) => {
    if (!tasks.some((x) => x.taskName === task.taskName)) {
      setTasks([...tasks, task]);
    } else {
      alert("Уже существует задача с таким названием");
    }
  };

  const handleClearCompleted = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };
  const handleFilteredClick = useCallback(() => {
    if (filter !== undefined) {
      const copyTodo = [...tasks];
      setFilteredTask(copyTodo.filter((t) => t.completed === filter));
    } else {
      setFilteredTask([...tasks]);
    }
  }, [tasks, filter]);

  useEffect(() => {
    handleFilteredClick();
  }, [tasks, handleFilteredClick, filter]);

  return (
    <>
      <Wrapper>
        <Title>Todos</Title>
        <Accordions
          filteredTask={filteredTask}
          setTask={handleAddTask}
          handleCompletedClick={handleCompletedClick}
          handleClearCompleted={handleClearCompleted}
          setFilter={setFilter}
        />
      </Wrapper>
    </>
  );
};
