import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [age, setAge] = useState(5);
  const [name, setName] = useState('');
  const onChangeAge=() => {
    setAge(age+1);
  }
  const onChangeName = () => {
   setName(`Sáng`);
  }
  return (
    <div> 
    <div> hello {name}</div>
    <div> tuổi là {age} </div>
    <div onClick={onChangeAge} >
      tăng tuối thêm 1
    </div>
    <div onClick={onChangeName}> hiện thị tên</div>
    </div>
  );
}
export default App;
