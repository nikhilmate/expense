import {APP_LOADING, TOGGLE_SIDEBAR} from '../utils/actions.utils'

export const toggleSidebar = (params) => ({
    type: TOGGLE_SIDEBAR,
    toggleState: params.toggleState
})

export const setAppLoader = (params) => ({
    type: APP_LOADING,
    apploading: params.apploading
})