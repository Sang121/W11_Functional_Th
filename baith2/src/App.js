import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
const Loading = () => {
  return (
    <div class="loader"></div>
  );
};
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { 
    setTimeout(() => { 
      setIsLoading(false);
    },3000);
  },[]);
  return (
    <div className='container' >
       {isLoading && <Loading/>}
    </div>
  );
}

export default App;
