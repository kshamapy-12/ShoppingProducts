import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQty, increaseQty, removeFromCart } from '../redux/features/cartSlice';
import PayableAmt from './PayableAmt.jsx';


const cartItems = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items)

  return (
    <div className='w-[70%] mx-auto gap-10 flex flex-col'>
   <div className='flex flex-col justify-start items-start gap-5'>
{cart.map((elem) => {
return (
   <div key={elem.id} className='bg-slate-200 flex md:flex-row flex-col justify-between items-center gap-5 w-full px-5 py-6 rounded-3xl shadow-lg'>
        <div className='justify-start flex gap-5 items-center'>
           <div className='w-30 h-30 bg-white px-3 py-2 rounded-2xl shadow-lg overflow-hidden'>
          <img src={elem.image} alt="" className='object-contain w-full h-full' />
        </div>
        <p className='text-lg text-gray-500 font-medium'>{elem.title}</p>
       
        </div>
       <div className='flex justify-around items-center gap-5'>
       <p className='text-lg text-gray-700 font-medium'>${elem.price}</p> 
       <div className='flex gap-4 w-fit border-2 border-gray-400 px-3 rounded-2xl bg-white'>
                <button onClick={() => dispatch(decreaseQty(elem.id))} className='active:scale-90'><i className="ri-subtract-line"></i></button>
               <h2>{elem.quantity}</h2>
                 <button onClick={() => dispatch(increaseQty(elem.id))} className='active:scale-90'><i className="ri-add-line"></i></button>
                 
               </div>
               <button onClick={() => dispatch(removeFromCart(elem.id))} className='text-lg bg-indigo-500 rounded-full active:scale-95 px-6 py-2 text-white shadow-lg'>Remove</button>
       </div>
      </div>
)

})}
     
      
    </div>

    <PayableAmt />
    </div>
 
  )
}

export default cartItems
