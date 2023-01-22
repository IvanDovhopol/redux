import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from 'components/Layout';
import { AppBar } from 'components/AppBar';
import { TaskForm } from 'components/TaskForm';
import { TaskList } from 'components/TaskList';
import { fetchTasks } from 'redux/operations';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
      <Toaster />
    </Layout>
  );
};
