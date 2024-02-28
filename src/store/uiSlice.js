import { createSlice } from '@reduxjs/toolkit'
import catagories from '../data/catagoriesData'


const initialState={
    cart:true,
    registration:false,
    payment:false,
    sidePanel:false,
    settings:false,
    catagories:false
}

const uiSlice=createSlice({
    name:"uiSlice",
    initialState,

    reducers:{
        setCartVisibility:(state,action)=>{
            state.cart=action.payload
        },
        setRegistrationVisibility:(state,action)=>{
            state.registration=action.payload
        },

        setPaymentVisibility:(state,action)=>{
            state.payment=action.payload
        },
        setSidePanelVisibility:(state,action)=>{
            state.sidePanel=action.payload
        },
        setSettingsVisibility:(state,action)=>{
            state.settings=action.payload
        },
        setCatagoriesVisibility:(state,action)=>{
            state.catagories=action.payload
        }
    
    }
})

export const { setCartVisibility,setRegistrationVisibility,setPaymentVisibility,setSidePanelVisibility,setSettingsVisibility,setCatagoriesVisibility } =uiSlice.actions

export default uiSlice.reducer