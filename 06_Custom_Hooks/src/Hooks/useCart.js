// This custom hook, useCart, is designed to manage the state of a shopping cart in a React application. It provides functionality to add items to the cart, remove items from the cart, update the quantity of items in the cart, and calculate the total cost of the items in the cart. Additionally, it persists the cart data to local storage and syncs it across multiple tabs of the same browser.


import {useState, useEffect, useMemo} from "react";

export function useCart(){

    const [cart, setCart] = useState(()=>{
        try{
            const cartData = localStorage.getItem("cart");
            return cartData ? JSON.parse(cartData) : [];
        } catch(error){
            console.error("Error fetching cart data from local storage", error);
            return [];
        }
    });

    // Persist cart to local storage whenever it changes
    // useEffect is used to perform side effects in functional components. In this case, we want to save the cart data to local storage whenever it changes.
    useEffect(()=>{
        // Do something to fetch the cart data from an API or localstorage
        try{
            localStorage.setItem('cart', JSON.stringify(cart)); // it whole job is to parse the cart data into a JSON string and save it to local storage under the key "cart". This allows us to persist the cart data across page reloads and browser sessions.

        } catch(error){
            console.error("Failed to save cart data to local storage", error);
        }
    } ,[cart])


    // Sync across tabs
    // can be used to sync the cart data across multiple tabs of the same browser. When the cart data changes in one tab, it will be updated in all other tabs that are open. and done by listening to the "storage" event on the window object. When the cart data changes in one tab, it will trigger the "storage" event in all other tabs, allowing them to update their cart state accordingly.

    useEffect(()=>{
        const handleStorageChange = (event) => { // this is the function which consult to my local storage gets the value and if value is null give's the empty array
            if(event.key === "cart"){
                try{
                    const newCart = JSON.parse(event.newValue || '[]');
                    setCart(newCart);
                }catch(error){
                    console.log('falied to parse cart from localStorage', error);
                }
            }
        }
        window.addEventListener("storage", handleStorageChange); // this line adds an event listener to the window object that listens for the "storage" event. When the cart data changes in one tab, it will trigger the "storage" event in all other tabs, allowing them to update their cart state accordingly.
        return ()=>{
            window.removeEventListener("storage", handleStorageChange); // this line removes the event listener when the component unmounts to prevent memory leaks and unintended behavior.
        }
    },[]) // empty dependency array means this effect will only run once when the component mounts, and the event listener will be set up at that time.


    // functionality to add the item to the cart
    const addToCart = (product)=>{
        setCart(currentCart => {
            const existingItem = currentCart.find(item=>item.id === product.id);
            if(existingItem){
                return currentCart.map(item=>item.id === product.id ? {...item,quantity: item.quantity + 1} : item);
            }   else{
                return [...currentCart, {...product,quantity:1}];
            }
        })
    }

    const removeFromCart = (productId)=>{
        setCart(currentCart=>currentCart.filter(item=>item.id != productId));
    }

    const updateQuantity = (productId, quantity)=>{
        if(quantity < 1) return;
        setCart(currentCart=>currentCart.map(item=>item.id === productId ? {...item, quantity} : item));
    }
    
    // this is not required in react 19 or later
    const total = useMemo(()=>{
        return Number(cart.reduce((sum, item)=> {
            const itemTotal = item.price*(item.quantity || 0);
            return sum + itemTotal;
        }, 0)).toFixed(2);
    }, [cart]);


    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
    }
}