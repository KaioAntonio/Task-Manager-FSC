import './AddTaskDialog.css';

import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { v4 } from 'uuid';

import Button from './Button';
import Input from './Input';
import TimeSelect from './TimeSelect';

const AddTaskDialog = ({ isOpen, handleClose, handleCreateTask }) => {
  const nodeRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const timeRef = useRef();

  const [time, setTime] = useState('morning');
  const [error, setErrors] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setTime('morning');
    }
  }, [isOpen]);

  // Quando voce quer validar ou alterar o valor enquanto o usuário digita|| Usar: controlledInput
  // Quando voce não quer que renderize o input sempre que atualizado || Utilize o uncontrolledInput
  const handleSaveClick = () => {
    const newErrors = [];

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const time = timeRef.current.value;

    if (!title.trim()) {
      newErrors.push({
        field: 'title',
        message: 'Campo título é obrigatório',
      });
    }

    if (!description.trim()) {
      newErrors.push({
        field: 'description',
        message: 'Campo descrição é obrigatório',
      });
    }

    if (!time.trim()) {
      newErrors.push({
        field: 'time',
        message: 'Campo tempo é obrigatório',
      });
    }

    setErrors(newErrors);

    if (newErrors.length > 0) {
      return;
    }

    handleCreateTask({
      id: v4(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      time: timeRef.current.value,
      status: 'not_started',
    });
    handleClose();
  };

  const titleError = error.find((e) => e.field === 'title');
  const descriptionError = error.find((e) => e.field === 'description');
  const timeError = error.find((e) => e.field === 'time');

  return (
    <CSSTransition
      unmountOnExit
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-center font-semibold text-brand-dark-blue">
                Nova tarefa
              </h2>
              <p className="mb-4 mt-1 text-sm text-[#09090B]">
                Insira as informações abaixo
              </p>

              <div className="flex w-[336px] flex-col space-y-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Título da tarefa"
                  errorMessage={titleError?.message}
                  ref={titleRef}
                />

                <TimeSelect
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  errorMessage={timeError?.message}
                  ref={timeRef}
                />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  errorMessage={descriptionError?.message}
                  ref={descriptionRef}
                />

                <div className="flex gap-3">
                  <Button
                    onClick={handleClose}
                    size="large"
                    className="w-full"
                    variant="secondary"
                  >
                    Cancelar
                  </Button>
                  <Button
                    size="large"
                    className="w-full"
                    onClick={handleSaveClick}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  );
};

AddTaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCreateTask: PropTypes.func.isRequired,
};

export default AddTaskDialog;
