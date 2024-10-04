import Item from "./Item";
function PackingList({ items, setItems }) {
  return (
    <div className='list'>
      {items.length > 0 && (
        <ul>
          {items.map((item, index) => {
            return <Item key={index} item={item} setItems={setItems} />;
          })}
        </ul>
      )}
      <div className='actions'>
        <button onClick={() => setItems([])}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
