import React from "react";
import "../css/Item.css";
import axios from "axios";
 
const ListedItems = (props) => {
 const [toggleState, setToggleState] = React.useState(null);
 
 React.useEffect(() => {
   props.getAvailableItems();
 }, [props.cartItems]);
 
 const loaded = () => {
   const handleAddCart = (item) => {
     props.setCartItems([...props.cartItems, item]);
     console.log("cart items - ", props.cartItems);
     //make item selected unavailable
     axios.put(props.url + "items/id/" + item._id, {
       available: false,
     });
   };
 
   const handleClick = (index) => {
     setToggleState({ active: index });
     if (toggleState?.active === index) {
       setToggleState({ active: null });
     }
   };
 
   return (
     <div className="image-container-container">
       {props.listedItems.data.map((item, index) => {
         // console.log(item);
         if (item.available) {
           return (
             <div
               className={`image-container${
                 toggleState?.active === index ? " active" : ""
               }`}
               onClick={() => handleClick(index)}
               key={index}
             >
               <div className="card-container">
                 <img className="image" src={item.img} alt="none" />
                 <div className="image-text">
                   <h2 className="item-cardname">{item.name}</h2>
                   <p className="item-description">{item.description}</p>
                   <button onClick={() => handleAddCart(item)}>
                     Add to Cart
                   </button>
                 </div>
               </div>
             </div>
           );
         } else {
           console.log("item is unavailable");
           return null;
         }
       })}
     </div>
   );
 };
 
 const loading = () => {
   return <h1>LOADING...</h1>;
 };
 console.log(props.listedItems);
 
 return props.listedItems ? loaded() : loading();
};
 
export default ListedItems;
