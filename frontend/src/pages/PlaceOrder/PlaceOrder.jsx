import React, { useContext } from 'react'
import './PlaceOrder.css'
import { Form } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
export const Placeorder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <Form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Infromation</p>
      <div className="multi-fields">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
      </div>
      <input type="text" placeholder='Eamil address'/>
      <input type="text" placeholder='Street'/>
      <div className="multi-fields">
        <input type="text" placeholder='City'/>
        <input type="text" placeholder='State'/>
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='Zip code'/>
        <input type="text" placeholder='Country'/>
      </div>
      </div>
      <input type="text" placeholder='Phone'/>
       <div className="place-order-right">
       
       <div className="cart-total">
          <h2>Cart Total</h2>
           <div>
           <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
             <b>Total</b>
             <b>${getTotalCartAmount()===0?0:getTotalCartAmount() +2}</b>
            </div>
           </div>
            <button >PROCEED TO PAYMEANT</button>
        </div>

       </div>
    </Form>
  )
}
