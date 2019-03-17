import * as actionTypes from './actionTypes';

const initialState = {
    users : [],
    posts : [],
    users_loaded : false,
    posts_loaded : false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_USERS:
            console.log("SET_USERS")
            return {
                ...state,
                users : [
                    ...action.users,
                ],
                users_loaded : true
            };

        case actionTypes.SET_POSTS:
            console.log("SET_POSTS")
            return {
                ...state,
                posts : [
                    ...action.posts,
                ],
                posts_loaded : true
            };

        case actionTypes.ADD_POST:
            console.log("ADD_POST")

            return { ...state, 
                posts: [...state.posts, action.post],
            }; 

            // return state.posts.concat(action.post);

        default:
            return state;

        }
}

export default reducer;