import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'sonner';

import { CheckIcon, DetailsIcon, LoaderIcon, TrashIcon } from '../assets/icons';
import Button from './Button';

const TaskItem = ({ task, handleCheckboxClick, onDeleteSuccess }) => {
  const [deleteTaskIsLoading, setDeleteTaskIsLoading] = useState(false);
  const handleDeleteClick = async () => {
    setDeleteTaskIsLoading(true);
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      return toast.error(
        'Erro ao remover a tarefa. Por favor, tente novamente'
      );
    }
    onDeleteSuccess(task.id);
    setDeleteTaskIsLoading(false);
  };
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-brand-primary text-brand-primary';
    }
    if (task.status === 'in_progress') {
      return 'bg-brand-process text-brand-process';
    }
    if (task.status === 'not_started') {
      return 'bg-brand-dark-blue bg-opacity-10 text-brand-dark-blue';
    }
  };

  return (
    <div
      className={`${getStatusClasses()} flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 transition`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`rondend-lg relative flex h-7 w-7 cursor-pointer items-center justify-center ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === 'done'}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleCheckboxClick(task.id)} //Quando for chamar uma função que recebe como prop e precisa passar parametro precisa ser assim
          />
          {task.status === 'done' && <CheckIcon />}
          {task.status === 'in_progress' && (
            <LoaderIcon className="animate-spin text-brand-white" />
          )}
        </label>
        {task.title}
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => handleDeleteClick(task.id)}
          variant="ghost"
          className="flex items-center gap-2"
          disabled={deleteTaskIsLoading}
        >
          {deleteTaskIsLoading ? (
            <LoaderIcon className="animate-spin text-brand-text-gray" />
          ) : (
            <TrashIcon className="text-brand-text-gray" />
          )}
        </Button>
        <a href="#" className="transition hover:opacity-75">
          <DetailsIcon />
        </a>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.oneOf(['morning', 'afternoon', 'evening']).isRequired,
    status: PropTypes.oneOf(['not_started', 'in_progress', 'done']).isRequired,
  }).isRequired,
  handleCheckboxClick: PropTypes.func.isRequired,
  onDeleteSuccess: PropTypes.bool.isRequired,
};

export default TaskItem;
