import CheckIcon from '../assets/icons/check.svg?react';
import LoaderIcon from '../assets/icons/loader-circle.svg?react';
import DetaisIcon from '../assets/icons/details.svg?react';

const TaskItem = ({ task, handleTaskCheckboxClick }) => {
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
            onChange={() => handleTaskCheckboxClick(task.id)} //Quando for chamar uma função que recebe como prop e precisa passar parametro precisa ser assim
          />
          {task.status === 'done' && <CheckIcon />}
          {task.status === 'in_progress' && <LoaderIcon />}
        </label>
        {task.title}
      </div>
      <a href="#" className="transition hover:opacity-75">
        <DetaisIcon />
      </a>
    </div>
  );
};

export default TaskItem;
