import React from 'react'
import '../Style/Amazon.css'
import List from '../List.js'

const Amazon = ({ekle}) => {
  
  return (
    <section>
      <div className='container'>
      {List.map((item)=>(
      <div className='container1' key={item .id}>
        <div className="container2-img">
        <img src={item.img} />
        </div>
        <div className="element">
        <span style={{fontSize:20, color:'white'}}>{item.title}</span>
        <span>{item.yazar}</span>
        <span>{item.fiyat} TL</span>
        <button className='container-btn' onClick={()=>ekle(item)}>Ekle</button>
        </div>
      </div>
        ))}
        </div>
    </section>
  )
}

export default Amazon



     