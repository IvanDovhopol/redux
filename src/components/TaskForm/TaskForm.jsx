import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/Button/Button';
import { addTask } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import css from './TaskForm.module.css';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder={
          isLoading && !error ? 'Request in progress ...' : 'Enter task text...'
        }
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
