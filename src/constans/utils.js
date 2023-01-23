import toast from 'react-hot-toast';

export const addToast = () => {
  return toast.success(`Task successfully added!`, {
    style: {
      border: '1px solid green',
      padding: '16px',
      color: 'green',
    },
  });
};

export const deletedToast = () => {
  return toast.success('Task deleted!', {
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  });
};
