import React from 'react';
import { useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import { useDispatch } from 'react-redux';

const Category = () => {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.categories);
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
      ;
    </div>
  );
};

export default Category;
