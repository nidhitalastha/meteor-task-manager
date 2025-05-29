import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';

// Define the collection
export const TasksCollection = new Mongo.Collection('tasks');

// Define the schema
const TaskSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Task Title",
    required: true
  },
  tags: {
    type: Array,
    optional: true,
  },
  'tags.$': {
    type: String
  },
  createdAt: {
    type: Date,
    label: "Created Time",
    autoValue() {
      if (this.isInsert) {
        return new Date();
      }
      this.unset(); // Prevent update from modifying it
    }
  },
  startedAt: {
    type: Date,
    optional: true,
  },
  completedAt: {
    type: Date,
    optional: true,
  },
  status: {
    type: String,
    allowedValues: ['Not Started', 'In Progress', 'Completed'],
    defaultValue: 'Not Started'
  }
});


TasksCollection.attachSchema(TaskSchema);

Meteor.methods({
  'tasks.insert'(title, tags = []) {
    // Basic input validation
    if (typeof title !== 'string' || title.trim() === '') {
      throw new Meteor.Error('invalid-title', 'Title must be a non-empty string.');
    }

    if (!Array.isArray(tags)) {
      throw new Meteor.Error('invalid-tags', 'Tags must be an array of strings.');
    }

    // Insert task
    return TasksCollection.insert({
      title,
      tags,
      createdAt: new Date(),
      startedAt: null,
      completedAt: null,
      status: 'Not Started'
    });
  }
})