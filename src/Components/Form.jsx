import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ setItems, items }) {
  const [description, setDesctiption] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <form className='add-form' onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => {
          return (
            <option value={i + 1} key={i + 1}>
              {i + 1}
            </option>
          );
        })}
      </select>
      <input
        type='text'
        placeholder='Add an item'
        value={description}
        onChange={(e) => setDesctiption(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (description === "") return alert("Please add an item");

    const newItem = {
      id: uuidv4(),
      description: description,
      quantity: quantity,
      packed: false,
      order: items.length + 1,
    };
    setDesctiption("");
    setQuantity(1);

    setItems((prev) => [...prev, newItem]);
  }
}

export default Form;
