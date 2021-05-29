import {TOGGLE_SIDEBAR} from '../utils/actions.utils'
import {INIT_DOM_STATE} from '../utils/reducer.utils'

const DomReducer = (state = INIT_DOM_STATE, action) => {
    if (action && action.hasOwnProperty('type')) {
        switch (action.type) {
            case TOGGLE_SIDEBAR:
                let {toggleState} = action
                toggleState = toggleState ? toggleState : false

                return {
                    ...state,
                    sidebar: {
                        ...state.sidebar,
                        visible: toggleState
                    }
                }

            default:
                return state
        }
    }
}

export default DomReducer
