const _prefix = 'exp_track_data'

export const getStorageItem = () => {
    try {
        let localData = localStorage.getItem(`${_prefix}`),
            derivedData = localData ? JSON.parse(localData) : null
        return derivedData
    } catch (error) {
        console.log(error)
        return null
    }
}

export const setStorageItem = (_data) => {
    try {
        let derivedData = JSON.stringify(_data)
        if (derivedData) localStorage.setItem(`${_prefix}`, derivedData)
    } catch (error) {
        console.log(error)
    }
}

export const reduceNonSavedState = (_state) => {
    let derivedState = { ..._state }
    if (typeof derivedState === 'object' && derivedState.hasOwnProperty('ui_loader')) {
        delete derivedState.ui_loader
    }
    return derivedState
}