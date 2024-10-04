function Item({ item, setItems }) {
  return (
    <li id={item.id}>
      <label htmlFor={"checkbox-" + item.id}>
        <input
          id={"checkbox-" + item.id}
          type='checkbox'
          onChange={(e) => console.log(e.target.checked)}
        />
        <span>{item.description}</span>
      </label>
      <button onClick={(e) => handleDelete(e)}>❌</button>
    </li>
  );

  function handleDelete(e) {
    setItems((prev) =>
      prev.filter((item) => item.id !== e.target.parentElement.id)
    );
  }
}

export default Item;
