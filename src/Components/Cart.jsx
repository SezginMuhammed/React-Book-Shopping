import { useEffect, useState } from 'react'
import '../Style/Cart.css'
const Cart = ({yenidizi ,setYenidizi ,degistir}) => {
  const[total ,setTotal]=useState(0);

const sil =(id)=>{
  const silme =[...yenidizi]
  silme.splice(id,1)
  setYenidizi(silme)
}
const newTotal=()=>{
let deger=0;
yenidizi.map((item)=>{
  deger+=item.adet*item.fiyat;
})
setTotal(deger)
}
useEffect(() => {
 newTotal();
})
  return (
    <article>
      <div className="cart">
        {yenidizi.map((item,id)=>(
        <div className="cart1"key={id}>
          <div className="cart-img">
            <img src={item.img}/>
            <h3>{item.title}</h3>
          </div>
          <div className="cart-element">
            <div className="cart-element1">
            <button className='c1' onClick={()=> degistir(item,1)}>+</button>
            <span>{item.adet}</span>
            <button className='c1' onClick={()=> degistir(item,-1)}>-</button>
            <span>{item.fiyat} TL</span>
            </div>
            <button className='c2' onClick={()=>sil(id)}>Sepetten Çıkar</button>
          </div>
        </div>
          ))}
      <div className="total">Toplam Sepet Tutarı {total} TL</div>
      </div>
    </article>
   )
 
  }
export default Cart

