import {
    SIGN_IN,
    SIGN_OUT,
    ONBOARDING_DONE,
    ONBOARDING_RESET,
    SESSION_START,
    SESSION_END
} from '../utils/actions.utils'

export const sessionStart = (userDetails) => ({
    type: SESSION_START,
    user: {...userDetails}
})

export const sessionEnd = () => ({
    type: SESSION_END
})

export const signIn = (userDetails) => ({
    type: SIGN_IN
})

export const signOut = () => ({
    type: SIGN_OUT
})

export const onboardingDone = () => ({
    type: ONBOARDING_DONE
})

export const onboardingReset = () => ({
    type: ONBOARDING_RESET
})
