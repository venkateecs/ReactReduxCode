import { CHG_POSTS } from '../actions/posts-actions';
const initialState = {
    posts: [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    ]
}
export default function changePosts(state = initialState, { type, payload }) {
    switch (type) {
        case CHG_POSTS: 
            return {
                ...state,
                posts: state.posts.concat(payload)
            }
        default:
            return state;
    }
}
