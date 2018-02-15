const initialState={
    name : 'Houser',
}

const NAME = 'NAME'


export function Name(something){
    return{
        type:NAME,
        payload: something  
    }
}

export default function reducer(state = initialState, action){
// switch(action.type){
//     case NAME:
//     break;
//     default:
    return state

}