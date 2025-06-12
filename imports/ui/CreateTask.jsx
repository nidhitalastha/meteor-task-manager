import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';


export const CreateTask = () => {

    return (
        <div>
            <IconButton color="default" aria-label="create a task">
                <AddIcon />
            </IconButton>
        </div>
    )
}