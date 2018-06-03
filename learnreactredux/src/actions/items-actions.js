
export const  UPDATE_ITEMS = 'chgItem' ;
export function changeItems(newValue) {
  return {
    type:UPDATE_ITEMS,
    payload: {
        items:newValue
    }
  }
}