function Item({ item, setItems, index }) {
  return (
    <li id={item.id} data-index={index}>
      <label htmlFor={"checkbox-" + item.id}>
        <input
          id={"checkbox-" + item.id}
          type='checkbox'
          checked={item.packed}
          onChange={(e) => setPackedStatus(e)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.description}
        </span>
      </label>
      <button onClick={(e) => handleDelete(e)}>❌</button>
    </li>
  );

  function handleDelete(e) {
    setItems((prev) =>
      prev.filter((item) => item.id !== e.target.parentElement.id)
    );
  }

  function setPackedStatus(e) {
    const currentItemID = e.target.closest("li").id;
    setItems((prev) => {
      return prev.map((item) => {
        return item.id === currentItemID
          ? { ...item, packed: !item.packed }
          : item;
      });
    });
  }
}

export default Item;
