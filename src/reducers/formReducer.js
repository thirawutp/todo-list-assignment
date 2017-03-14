import { OPEN_CREATE_FORM, OPEN_EDIT_FORM, CLOSE_FORM } from '../actions/types'

const formReducer = (state = {}, action) => {
    switch (action.type) {
        case OPEN_CREATE_FORM:
            return action.payload
        case OPEN_EDIT_FORM:
            return action.payload
        case CLOSE_FORM:
            return action.payload
        default:
            return state
    }
}

export default formReducer