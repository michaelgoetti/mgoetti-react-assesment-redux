export const LIST_DATA = 'LIST_DATA';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';

export function addItem(listItem) {
  return {
    type: ADD_ITEM,
    listItem
  }
}

export function removeItem(listItem) {
	return {
		type: REMOVE_ITEM,
		listItem,
	}
}

export function completeItem(index) {
	return {
		type: COMPLETE_ITEM,
		index,
	}
}



