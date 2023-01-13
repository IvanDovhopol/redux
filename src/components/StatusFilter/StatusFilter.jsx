import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constans';
import { getStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/actions';
import { Button } from 'components/Button';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const { all, active, completed } = statusFilters;

  function handleFilterChange(filter) {
    dispatch(setStatusFilter(filter));
  }

  return (
    <div className={css.wrapper}>
      <Button selected={filter === all} onClick={() => handleFilterChange(all)}>
        All
      </Button>
      <Button
        selected={filter === active}
        onClick={() => handleFilterChange(active)}
      >
        Active
      </Button>
      <Button
        selected={filter === completed}
        onClick={() => handleFilterChange(completed)}
      >
        Completed
      </Button>
    </div>
  );
};
