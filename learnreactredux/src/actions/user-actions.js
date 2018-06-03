
export const  UPDATE_USER = 'chgUser' ;
export function changeUser(newValue) {
  return {
    type:UPDATE_USER,
    payload: {
        user:newValue
    }
  }
}