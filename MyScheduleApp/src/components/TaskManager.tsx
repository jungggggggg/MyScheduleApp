import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Task = {
  title: string;
  id: string;
  datetime: string;
  dateday: string;
};

type TaskManagerContextType = {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  deleteTask: (id: string) => void; 
};

const TaskManagerContext = createContext<TaskManagerContextType | undefined>(undefined);

export const useTaskManager = () => {
  const context = useContext(TaskManagerContext);
  if (!context) {
    throw new Error('useTaskManager must be used within a TaskManagerProvider');
  }
  return context;
};

const TaskManagerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((currentTasks) => currentTasks.filter(task => task.id !== id));
  };

  return (
    <TaskManagerContext.Provider value={{ tasks, addTask, deleteTask }}>
        {children}
    </TaskManagerContext.Provider>
  );
};

export default TaskManagerProvider;