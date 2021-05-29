import {APP_LOADING} from '../utils/actions.utils'
import {INIT_LOADER_STATE} from '../utils/reducer.utils'

const LoaderReducer = (state = INIT_LOADER_STATE, action) => {
    if (action && action.hasOwnProperty('type')) {
        switch (action.type) {
            case APP_LOADING:
                let {apploading} = action
                apploading = apploading ? apploading : false

                return {
                    ...state,
                    apploading
                }

            default:
                return state
        }
    }
}

export default LoaderReducer
