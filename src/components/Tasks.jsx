import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from '../assets/icons';
import AddTaskDialog from './AddTaskDialog';
import Button from './Button';
import TaskItem from './TaskItem';
import TasksSeparator from './TasksSeparetor';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'GET',
      });

      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const morningTasks = tasks.filter((task) => task.time === 'morning');
  const afternoonTasks = tasks.filter((task) => task.time === 'afternoon');
  const nightTasks = tasks.filter((task) => task.time === 'evening');

  const handleTaskCheckboxClick = (taskId) => {
    let newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        if (task.status === 'done') {
          toast.success('Tarefa reiniciada com sucesso!');
          return { ...task, status: 'not_started' };
        }
        if (task.status === 'not_started') {
          toast.success('Tarefa iniciada com sucesso!');
          return { ...task, status: 'in_progress' };
        }
        if (task.status === 'in_progress') {
          toast.success('Tarefa concluída com sucesso!');
          return { ...task, status: 'done' };
        }
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleCreateTask = async (newTask) => {
    const response = await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      body: JSON.stringify(newTask),
    });
    if (!response.ok) {
      return toast.error(
        'Erro ao adicionar a tarefa. Por favor, tente novamente'
      );
    }

    setTasks([...tasks, newTask]);
    toast.success('Tarefa criada com sucesso!');
    setAddTaskDialogIsOpen(false);
  };

  const handleDeleteClick = async (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    toast.success('Tarefa deletada com sucesso!');
  };

  const handleDialogClose = () => {
    setAddTaskDialogIsOpen(false);
  };

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <div className="flex justify-between">
        <div>
          <span className="text-xs font-semibold text-brand-primary">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar Tarefas
            <TrashIcon />
          </Button>
          <Button onClick={() => setAddTaskDialogIsOpen(true)}>
            Nova Tarefa
            <AddIcon />
          </Button>

          <AddTaskDialog
            isOpen={addTaskDialogIsOpen}
            handleClose={handleDialogClose}
            handleCreateTask={handleCreateTask}
          />
        </div>
      </div>

      {/* Tasks List */}
      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              onDeleteSuccess={handleDeleteClick}
            />
          ))}
        </div>
        <div className="my-3 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudSunIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              onDeleteSuccess={handleDeleteClick}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {nightTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              onDeleteSuccess={handleDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
