import {
    ONBOARDING_DONE,
    ONBOARDING_RESET,
    SESSION_END,
    SESSION_START,
    SIGN_IN,
    SIGN_OUT
} from '../utils/actions.utils'
import {INIT_USER_STATE} from '../utils/reducer.utils'

const SessionReducer = (state = INIT_USER_STATE, action) => {
    if (action && action.hasOwnProperty('type')) {
        switch (action.type) {
            case SESSION_START:
                let {_id, email, createdAt} = action.user
                _id = typeof _id === 'string' && _id.length > 0 ? _id : ''
                email =
                    typeof email === 'string' && email.length > 0 ? email : ''
                createdAt =
                    typeof createdAt === 'number' && createdAt > 0
                        ? createdAt
                        : ''

                return {
                    ...state,
                    user: {
                        ...state.user,
                        _id,
                        email,
                        createdAt
                    }
                }

            case SESSION_END:
                return {
                    ...state,
                    user: {
                        ...state.user,
                        _id: '',
                        email: '',
                        createdAt: 0
                    },
                    logged: false,
                    onboarding: false
                }

            case SIGN_IN:
                return {
                    ...state,
                    logged: true
                }

            case SIGN_OUT:
                return {
                    ...state,
                    logged: false
                }

            case ONBOARDING_DONE:
                return {
                    ...state,
                    onboarding: true
                }

            case ONBOARDING_RESET:
                return {
                    ...state,
                    onboarding: false
                }

            default:
                return state
        }
    }
}

export default SessionReducer
