import React from 'react';
import { Typography } from '@mui/material';
import TaskList from './TaskList';

const isToday = (date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const Landing = ({ tasks }) => {
  const todayTasks = tasks.filter((task) => isToday(new Date(task.createdAt)));

  return (
    <>
      <Typography variant="h5" gutterBottom align="center">
        Tasks for Today
      </Typography>
      <TaskList tasks={todayTasks} />
    </>
  );
};

export default Landing;
