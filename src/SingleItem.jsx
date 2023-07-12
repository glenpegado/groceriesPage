import { useState } from 'react';

function SingleItem({ el, removeItems, editItems }) {
  const { completed, id, name } = el;

  //RETURN
  return (
    <div className='single-item'>
      {/* CHECKBOX */}
      <input
        type='checkbox'
        checked={completed}
        onChange={() => editItems(id)}
      />
      {/* GROCERIES */}
      <p
        style={{
          textDecoration: completed && 'line-through',
          textTransform: 'capitalize',
        }}
      >
        {name}
      </p>
      {/* REMOVE ITEM */}
      <button className='btn remove-btn' onClick={() => removeItems(el.id)}>
        delete
      </button>
    </div>
  );
}
export default SingleItem;
