import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import { useState } from "react";
import Dialog from "./Components/Dialog";
function App() {
  const [items, setItems] = useState([]);
  const packedItems = items.filter((item) => item.packed).length;

  return (
    <div className='app'>
      <Logo />
      <Form setItems={setItems} items={items} />
      <PackingList items={items} setItems={setItems} />
      <Stats totalItems={items.length} packedItems={packedItems} />
      <Dialog state={"true"} />
    </div>
  );
}

export default App;
