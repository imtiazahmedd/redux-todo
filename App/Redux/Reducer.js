
  const Counters = (state = 0, action) =>{
    switch(action.type){
        case 'Addition':
        return {
                ...state,
                payload : action.payload
            };
        default : 
        return state
    }
  };
  export default Counters