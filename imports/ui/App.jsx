import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Landing from './Landing';
import TaskModal from './TaskModal';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);

  const handleAddTask = (task) => {
    setTasks([task, ...tasks]);
    setOpen(false);
  };

  return (
    <Router>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Switch>
          <Route exact path="/" component={() => <Landing tasks={tasks} />} key={tasks.length} />
        </Switch>


        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: 'fixed', bottom: 24, right: 24 }}
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>

        <TaskModal open={open} setOpen={setOpen} onSubmit={handleAddTask} />
      </Container>
    </Router>
  );
};

export default App;
