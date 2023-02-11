import { BUY_CAKE } from "./cakeTypes"
const initial = {
    numOfCake: 10
}

const CakeReducer = (state= initial, action) =>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake - 1
            }
            default : return state
    }
}
export default CakeReducer