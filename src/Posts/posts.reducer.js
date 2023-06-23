const initialState = {
    status:'idle',
    data:[],
    error:null,
}

const postReducer = (state = initialState, action)=>{
    switch(action.type){
        case " PENDING":
            return{
                ...state,
                status: 'pending'
            }
        case "SUCCESS":
            return{
                ...state,
                status:'fetching',
                data:action.payload,
            }
        case "FAILURE":
            return{
                ...state,
                status:'Error',
                error: action.payload,
            }
        default:
            return state;
    }
}

export default postReducer;