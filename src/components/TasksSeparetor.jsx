const TasksSeparator = ({ title, icon }) => {
  return (
    <div className="border-brand-border flex gap-3 border-b border-solid pb-5">
      {icon}
      <p className="text-brand-text-gray text-sm">{title}</p>
    </div>
  );
};

export default TasksSeparator;
