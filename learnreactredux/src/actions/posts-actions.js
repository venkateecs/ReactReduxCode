export const CHG_POSTS = 'changepost';
export function chgPosts (newValue) {
 return {
     type:CHG_POSTS,
     payload:{
         posts:newValue
     }
 }
}

export function getPostAPI() {
  return function (dispatch) {
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response)=> response.json())
     .then((data)=>{
        dispatch ({
            type: CHG_POSTS,
            payload: data
         })
     })
}
}