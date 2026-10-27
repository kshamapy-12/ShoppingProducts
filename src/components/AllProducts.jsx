import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/features/productSlice";
import { addToWishlist, removeFromWishlist } from '../redux/features/wishListSlice';
import { addToCart, decreaseQty } from '../redux/features/cartSlice';


const AllProducts = () => {

const dispatch = useDispatch();
const products = useSelector((state) => state.products.items);
const wishlist = useSelector((state) => state.wishlist.items);
const cart = useSelector((state) => state.cart.items);



useEffect(() => {
    const getData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products?limit=20');
    dispatch(setProducts(response.data))
    }
    getData();
}, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-10'>
      {

        products.map((elem) => {
          const isSaved = wishlist.some((item) => item.id === elem.id);
          const cartItem = cart.find((c) => c.id === elem.id)
          return (
             <div key={elem.id} className='w-full flex flex-col justify-start items-center gap-6 px-10 py-3 bg-pink-50 rounded-3xl shadow-lg'>
   
      <div className='min-w-80 relative min-h-80 p-10 overflow-hidden rounded-2xl bg-white'>
           <div className='absolute top-3 right-3 bg-pink-100 px-4 py-3 rounded-full active:scale-95 shadow-lg'>
        <button onClick={() => {
          if(isSaved) {
            dispatch(removeFromWishlist(elem.id))
          } else{
            dispatch(addToWishlist(elem))
          }
        }}><i className={ isSaved ? "ri-poker-hearts-fill text-pink-600" : "ri-poker-hearts-line text-pink-600" }></i></button>
      </div>
        <img src={elem.image} alt="" className='object-contain w-full h-full' />
      </div>
      <p className='text-gray-500 font-medium line-clamp-2 min-h-14'>{elem.title}</p>
      <div className='flex justify-between items-center gap-4 w-full'>
        <div className='text-lg text-gray-700'>
          
          <p>${elem.price}</p>
        </div>
        <div className='flex gap-4 w-fit border-2 border-gray-400 px-3 rounded-2xl bg-white'>
         <button onClick={() => dispatch(decreaseQty(elem.id))} className='active:scale-90'><i className="ri-subtract-line"></i></button>
        <h2>{cartItem?.quantity || 0}</h2>
          <button onClick={() => dispatch(addToCart(elem))} className='active:scale-90'><i className="ri-add-line"></i></button>
        </div>
        
      </div>

      
     </div>
          )
        })
      }
      
    
    </div>
  )
}

export default AllProducts
