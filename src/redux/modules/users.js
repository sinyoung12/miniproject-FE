// action

const CREATE_USER = "users/CREATE_USER"
const LOAD_USER = "users/LOAD_USER"
const DELETE_USER = "users/DELETE_USER"
// const UPDATE_USER = "users/UPDATE_USER"


// action creator 

export const createUser = (payload) => ({type: CREATE_USER , payload});
export const loadUser = (payload) => ({type: LOAD_USER , payload});
export const deleateUser = (payload) => ({type: DELETE_USER , payload});
// export const updateuser = (payload) => ({type: UPDATE_USER , payload});


// initialState 초기값 설정


const initialState = {
    name: null,
    comment: null
}


// reducer

const users = (state = initialState , {payload, type}) => {
    console.log(type);
    switch(type){
        case CREATE_USER:
            return {
                ...state,
                users: [
                    {id: state.users.length +1, name: payload, comment: payload}
                ]
            };
        case LOAD_USER:
            return {
                ...state, users: payload,
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user)=>{
                    return user.id !== payload;
                })
            };
        default:
            return state;
    }
}

export default users;