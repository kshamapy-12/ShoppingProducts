
import {  useSelector } from 'react-redux'

const PayableAmt = () => {
    const cart = useSelector((state) => state.cart.items);
    const total = cart.reduce((sum, elem) => sum + elem.price * elem.quantity, 0)
    const totalQty = cart.reduce((sum, elem) => sum + elem.quantity, 0);
  return (
  
    <div className='border-t-3 border-slate-400 pt-7 px-5'>
        <div className='flex justify-between items-start'>
            <h2 className='text-lg text-gray-600'>Items</h2>
            <h2 className='text-lg text-gray-600'>{totalQty}</h2>
        </div>
        <div className='flex justify-between items-start'>
            <h1 className='text-lg text-gray-600 font-bold'>Total</h1>
            <h1 className='text-lg text-gray-600 font-bold'>${total}</h1>
        </div>
    </div>
  )
}

export default PayableAmt
