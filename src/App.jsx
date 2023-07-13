import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//FUNCTION setLocalStorage
const setLocalStorage = (item) => {
  localStorage.setItem('list', JSON.stringify(item));
};

function App() {
  //defaultStorage
  let defaultItems = JSON.parse(localStorage.getItem('list') || '[]');

  //useState
  const [items, setItems] = useState(defaultItems);

  //FUNCTION addItems
  const addItems = (input) => {
    let obj = {
      name: input,
      id: nanoid(),
      completed: false,
    }; //object

    const newItems = [...items, obj];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added');
  };

  //FUNCTION removeItem
  const removeItems = (id) => {
    let newItem = items.filter((el) => el.id !== id);
    setItems(newItem);
    setLocalStorage(newItem);
    toast.success('item deleted');
  };

  //FUNCTION editItem
  const editItems = (itemId) => {
    let newItems = items.map((el) => {
      if (el.id == itemId) {
        let newItemObj = { ...el, completed: !el.completed };
        return newItemObj;
      }
      return el;
    });

    setItems(newItems);
    setLocalStorage(newItems);
  };

  //RETURN
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addItems={addItems} />
      <Items items={items} removeItems={removeItems} editItems={editItems} />
    </section>
  );
}

export default App;
