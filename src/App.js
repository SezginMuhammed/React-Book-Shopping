import './App.css';
import Navbar from './Components/Navbar'
import Amazon from './Components/Amazon'
import Cart from './Components/Cart'
import { useState } from 'react';

function App() {
  const[show ,setShow] =useState(true)
  const[yenidizi ,setYenidizi] =useState([])

  const ekle=(item)=>{
    if(yenidizi.includes(item)) 
    return;
    setYenidizi([...yenidizi,item]) 
  }

  const degistir =(item , artaz)=>{

    const sezo=yenidizi.indexOf(item);
    yenidizi[sezo].adet += artaz;

    if(yenidizi[sezo].adet===0)
    yenidizi[sezo].adet=1;
  setYenidizi([...yenidizi])
  }

  return (
    <div>
     <Navbar setShow={setShow} size={yenidizi.length}/>
     { show ?< Amazon ekle={ekle}/>:<Cart yenidizi={yenidizi} setYenidizi={setYenidizi} degistir={degistir}  />}
    
     
    </div>
  );
}

export default App;
