import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import { useState } from "react";
import Dialog from "./Components/Dialog";
function App() {
  const [items, setItems] = useState([]);

  return (
    <div className='app'>
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats />
      <Dialog state={"true"} />
    </div>
  );
}

export default App;
