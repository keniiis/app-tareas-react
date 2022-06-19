import { useState } from "react";

export const TaskCreator = () => {

    const [encapsularPalabra, setEncapsularPalabra] = useState()

    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem('task', encapsularPalabra)
      setEncapsularPalabra('')
    }

    return(
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter new task' value={encapsularPalabra} onChange={e => setEncapsularPalabra(e.target.value)}/>
          <button>save task</button>
      </form>
    );
}