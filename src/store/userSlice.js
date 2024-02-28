import { createSlice } from '@reduxjs/toolkit'

const initialState={
    users:[],
    currentUser:"",
}



export function findCurrentCart(usersList,currentUser){
   
  const user=usersList.find((user) => user.name === currentUser)
  return user ? user.cart : []
}



export const usersSlice=createSlice({
    name:"users",
    initialState,
    reducers:{

        setCurrentUser:(state,action)=>{
              state.currentUser =action.payload;
        },
        
        addUser:(state,action)=>{
           state.users.push(action.payload)
        },


        addProduct:(state,action)=>{ 

            if(state.users.length===0) alert("No user is selected")
            
            const product=action.payload
        
            let cart = findCurrentCart(state.users,state.currentUser)

            const item= cart.find(cartItem=>cartItem.name===product.name)
        
              if (item) {
                item.quantity=item.quantity+1
              } else {
                cart.push(product);
              }
            },
        

        incrementProduct:(state,action)=>{

                const product=action.payload
        
                const cart = findCurrentCart(state.users,state.currentUser)

                const item= cart.find(cartItem=>cartItem.name===product.name)

                item.quantity=item.quantity+1
            
        },

        decrementProduct :(state,action) => {
            
            const product=action.payload;
            
            const cart = findCurrentCart(state.users,state.currentUser)

            const item= cart.find(cartItem=>cartItem.name===product.name)

            if(item.quantity>1) item.quantity=item.quantity-1
        
          },


          removeProduct:(state,action)=>{

            const product=action.payload

            const cart = findCurrentCart(state.users,state.currentUser)
        
            const newCart=cart.filter(item=>item.name!==product.name)

            const user=state.users.find((user) => user.name === state.currentUser)

            user.cart=newCart
          
          }
        }

})




export const {addUser,addProduct,incrementProduct,decrementProduct,removeProduct,setCurrentUser}=usersSlice.actions


export default usersSlice.reducer