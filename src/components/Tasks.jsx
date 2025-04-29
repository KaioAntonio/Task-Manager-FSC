import Button from './Button';
import {
  TrashIcon,
  SunIcon,
  CloudSunIcon,
  MoonIcon,
  AddIcon,
} from '../assets/icons';
import TasksSeparator from './TasksSeparetor';
import TASKS from '../constants/tasks';
import { useState } from 'react';
import TaskItem from './TaskItem';
import { toast } from 'sonner';

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);

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

  const handleDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    toast.success('Tarefa deletada com sucesso!');
  };

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <div className="flex justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar Tarefas
            <TrashIcon />
          </Button>
          <Button>
            Nova Tarefa
            <AddIcon />
          </Button>
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
              handleDeleteClick={handleDeleteClick}
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
              handleDeleteClick={handleDeleteClick}
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
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
