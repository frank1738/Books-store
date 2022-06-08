import React from 'react';
import { useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import { useDispatch } from 'react-redux';
import { isDisabled } from '@testing-library/user-event/dist/utils';

const Category = () => {
  const currentStatus = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{currentStatus}</h3>
      <button
        type="submit"
        className="status-btn"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
      <button>create app</button>;
    </div>
  );
};

export default Category;
