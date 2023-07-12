import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form({ addItems }) {
  //useState
  const [groceries, setGroceries] = useState('');

  //FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!groceries) {
      toast.error('please provide value');
      return;
    }

    addItems(groceries);
    setGroceries(''); //reset to empty input
  };

  //RETURN
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className='form-control'>
        <input
          className='form-input'
          type='text'
          value={groceries}
          onChange={(e) => setGroceries(e.target.value)}
        />
        <button type='submit' className='btn'>
          Add Item
        </button>
      </div>
    </form>
  );
}

export default Form;
