import './App.css';
import { useState, useEffect } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },2000)
  },[])

  return (
    <div className="App">
      {
        loading ? 
        <SyncLoader
        color={'#1d3557'}
        loading={loading}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :   <div>
      <h1>Loading...</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm
      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha
      urvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lore
      </p>

      <p>
        azizdev__
      </p>
     </div>
      }
   
    </div>
  );
}

export default App;
