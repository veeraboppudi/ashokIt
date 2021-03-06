import { createReducer, on } from "@ngrx/store";
import { changeLabel, customData, decrement, increment, reset } from "./counter.actions";
import { initialState } from "./counter.state";

export function counterReducer(state,action){
    return _counterReducer(state,action);
}

const _counterReducer = createReducer(initialState,on(increment,(state)=>{
    return{
        ...state,
        counter : state.counter+1
    }
}),

on(decrement,(state)=>{
    return{
        ...state,
        counter : state.counter-1
    }
}),

on(reset,(state)=>{
    return{
        ...state,
        counter : 0
    }
}),

on(customData,(state,action)=>{
    return{
        ...state,
        counter : state.counter+action.value
    }
}),

on(changeLabel,(state)=>{
    return{
        ...state,
        message:"AshokIT NgRx Package"
    }
})


);
