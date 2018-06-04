import { CHG_POSTS } from '../actions/posts-actions';
import {UPDATE_POST} from '../actions/posts-actions' ;
const initialState = {
    posts: [
        
    ]
}
export default function changePosts(state = initialState, { type, payload }) {
    switch (type) {
        case CHG_POSTS: 
            return {
                ...state,
                posts: state.posts.concat(payload)
            }
            case UPDATE_POST:
            let getData = payload.posts;
            let getIndex = state.posts.findIndex((data)=> {
                 return data.id === payload.posts.id
            });
            state.posts[getIndex].title = getData.title ;
            state.posts[getIndex].body = getData.body ;
            return {
                ...state,
                posts:state.posts
            }
        default:
            return state;
    }
}
