import React, { useState } from 'react';
import {
  ListItem,
  ListItemText,
  Button,
  Stack,
  Chip,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import timeAgo from 'time-ago'; // your npm package

const TaskItem = ({ task, tasks, setTasks }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(task.timerStart);

  const handleStart = () => {
    setIsRunning(true);
    setStartTime(new Date());

    updateTask({ ...task, timerStart: new Date(), timerEnd: null });
  };

  const handleStop = () => {
    setIsRunning(false);
    const end = new Date();
    const duration = ((end - startTime) / 1000).toFixed(2); // in seconds
    alert(`⏱️ Time spent: ${duration} seconds`);

    updateTask({ ...task, timerEnd: end });
  };

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === task.id ? updatedTask : t)));
  };

  return (
    <ListItem divider>
      <ListItemText
        primary={task.title}
        secondary={`Created ${timeAgo(task.createdAt)}`}
      />
      <Stack direction="row" spacing={1}>
        {task.tags.map((tag, i) => (
          <Chip key={i} label={tag} size="small" />
        ))}
        <Button
          variant={isRunning ? 'outlined' : 'contained'}
          onClick={isRunning ? handleStop : handleStart}
        >
          {isRunning ? 'Stop' : 'Start'}
        </Button>
        <IconButton onClick={handleDelete} color="error">
          <DeleteIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default TaskItem;
