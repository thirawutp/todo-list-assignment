export const loadState = () => {
    try {
        const state = localStorage.getItem('state')
        if( state )
            return JSON.parse(state)
        return undefined
    } catch(err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const _state = JSON.stringify(state)
        localStorage.setItem('state', _state)
    } catch (err) {
        console.log(err)
    }
}