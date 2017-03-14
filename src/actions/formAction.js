import { OPEN_CREATE_FORM, OPEN_EDIT_FORM, CLOSE_FORM } from './types'

const openCreateForm = () => ({
    type: OPEN_CREATE_FORM,
    payload: { isCreate: true, open: true }
})

const openEditForm = (value) => ({
    type: OPEN_EDIT_FORM,
    payload: { isCreate: false, open: true, value }
})

const closeForm = () => ({
    type: CLOSE_FORM,
    payload: { open: false }
})

export {
    openCreateForm,
    openEditForm,
    closeForm,
}