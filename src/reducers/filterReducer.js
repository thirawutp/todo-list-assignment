import { FILTER_TODO } from '../actions/types'
import { FILTER_ALL } from '../actions/filterType'

const filterReducer = (state = FILTER_ALL, action) => {
    switch (action.type) {
        case FILTER_TODO:
            return action.payload.filter
        default:
            return state
    }
}

export default filterReducer