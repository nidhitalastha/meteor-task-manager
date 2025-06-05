import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, Stack
} from '@mui/material';

const TaskModal = ({ open, setOpen, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title,
      tags: tags.split(',').map((t) => t.trim()),
      createdAt: new Date(),
      isCompleted: false,
      timerStart: null,
      timerEnd: null,
    };

    onSubmit(newTask);
    setTitle('');
    setTags('');
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;
