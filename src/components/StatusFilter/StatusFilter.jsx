import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'redux/constans';
import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filtersSlice';
import { Button } from 'components/Button';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
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
