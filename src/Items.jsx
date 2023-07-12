import SingleItem from './SingleItem';

function Items({ items, removeItems, editItems }) {
  //RETURN
  return (
    <div className='items'>
      {items.map((el) => {
        return (
          <SingleItem
            key={el.id}
            el={el}
            removeItems={removeItems}
            editItems={editItems}
          />
        );
      })}
    </div>
  );
}

export default Items;
