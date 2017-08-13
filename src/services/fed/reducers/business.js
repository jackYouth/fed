import { mergeState } from '@boluome/common-lib'

const initialState = {}

const business = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SORT_INDEX':
      return mergeState(state, action)
    default: return state
  }
}

export default business
