import Item from "./Item";
function PackingList({ items, setItems }) {
  return (
    <div className='list'>
      {items.length > 0 && (
        <ul>
          {items.map((item, index) => {
            return (
              <Item key={index} item={item} setItems={setItems} index={index} />
            );
          })}
        </ul>
      )}

      {items.length > 0 && (
        <div className='actions'>
          <select onChange={(e) => handleSort(e)}>
            <option value='Sort by input order'>Sort by input order</option>
            <option value='Sort by description'>Sort by description</option>
            <option value='Sort by packed status'>Sort by packed status</option>
          </select>
          <button onClick={() => setItems([])}>Clear list</button>
        </div>
      )}
    </div>
  );

  function handleSort(e) {
    if (e.target.value === "Sort by input order") {
      setItems((prev) => {
        return [...prev].sort((a, b) => {
          if (a.order < b.order) {
            return -1;
          } else if (a.order > b.order) {
            return 1;
          } else {
            return 0;
          }
        });
      });
    } else if (e.target.value === "Sort by description") {
      setItems((prev) => {
        return [...prev].sort((a, b) => {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });
      });
    } else if (e.target.value === "Sort by packed status") {
      setItems((prev) => {
        return [...prev].sort((a, b) => {
          if (a.packed && !b.packed) {
            return -1;
          } else if (!a.packed && b.packed) {
            return 1;
          } else {
            return 0;
          }
        });
      });
    }
  }
}

export default PackingList;
