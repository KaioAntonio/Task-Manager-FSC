import { CheckIcon, DetailsIcon, LoaderIcon, TrashIcon } from '../assets/icons';
import Button from './Button';

const TaskItem = ({ task, handleCheckboxClick, handleDeleteClick }) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-[#00ADB5] text-[#00ADB5]';
    }
    if (task.status === 'in_progress') {
      return 'bg-[#FFAA04] text-[#FFAA04]';
    }
    if (task.status === 'not_started') {
      return 'bg-[#35383E] bg-opacity-10 text-[#35383E]';
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
          {task.status === 'in_progress' && <LoaderIcon />}
        </label>
        {task.title}
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => handleDeleteClick(task.id)}
          variant="ghost"
          className="flex items-center gap-2"
        >
          <TrashIcon className="text-[#9a9c9f]" />
        </Button>
        <a href="#" className="transition hover:opacity-75">
          <DetailsIcon />
        </a>
      </div>
    </div>
  );
};

export default TaskItem;
