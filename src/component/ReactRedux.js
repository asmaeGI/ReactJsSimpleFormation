import {ChangeState} from './Action'
const myState={
    isClicked:false
}

const myReducer=(state=myState,action)=>{
const  newState={...state}
if(action.type ==='Change_State'){
ChangeState(newState)
}
return newState
}


export default myReducer;