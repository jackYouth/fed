import { mergeState } from '@boluome/common-lib'

const initialState = {}

const promotion = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_FILTER':
      return mergeState(state, action)
    default: return state
  }
}

export default promotion
