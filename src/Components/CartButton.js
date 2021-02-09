import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'

function CartButton() {
   return (
     <div className="home-btn">
       <HiOutlineShoppingCart className='cart-icon'/>
       {/* <i className="fas fa-shopping-cart"></i> */}
     </div>
   );
}

export default CartButton
