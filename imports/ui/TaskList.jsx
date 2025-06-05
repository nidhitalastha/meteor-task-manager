import React from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, setTasks }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} tasks={tasks} />
      ))}
    </List>
  );
};

export default TaskList;
