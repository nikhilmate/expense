import React, { useState } from 'react'
import { connect } from 'react-redux'
import { sessionStart, signIn } from '../../actions/sessionActions'
import { LoaderIcon, OnboardingIcon } from '../../utils/icons.utils'
import { isValidEmail, uuid_r } from '../../utils/view.utils'

const EmailForm = (props) => {
    const [emailID, setEmailID] = useState('')
    const [errorMsg, setErrorMsg] = useState(false)
    const [ loaderState, setLoaderState ] = useState(false)
    
    const emailInputHandler = (_ev) => {
        setEmailID(_ev.currentTarget.value.trim())
        setErrorMsg(false)
    }

    const signInFormHandler = (_ev) => {
        _ev.preventDefault()
        let isValidId = isValidEmail(emailID)
        if (isValidId) {
            setLoaderState(true)
            startSession()
        } else setErrorMsg(true)
    }

    const startSession = () => {
        props.userLogged({
            _id: uuid_r(),
            email: emailID,
            createdAt: new Date().getTime()  
        })

        setTimeout(() => {
            props.signIn()
        }, 2000);
    }

    return (
        <div className={`wrap__onboard-form animation-on-pause`}>
            <div className="wrap__sign-form-icon">
                <OnboardingIcon width={60} height={60} />
            </div>
            <h1 className="h1_onboard-form">Sign In</h1>
            <h2 className="h2_onboard-main">Start your expense tracker by signing the form.</h2>
            <div className="wrap__sign-in-box">
                <form onSubmit={signInFormHandler} className="form__sign-in">
                    <div className="wrap__input-field">
                        <input onChange={emailInputHandler} value={emailID} type="text" name="email-address" className="comn-input-form input__email-form" placeholder="Email address" />
                    </div>
                    <div className="wrap__submit-field">
                        { errorMsg && <p className="form-error-msg">Enter valid email address</p>}
                        <button className={`comn-btn btn__sign-form ${loaderState ? 'btnDisabled' : ''}`}>Sign In</button>
                    </div>
                </form>
            </div>
            <div className="wrap__form-loader">
                <div className="loader-shield">
                    <LoaderIcon className={loaderState ? 'dl-blk' : ''} />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogged: (_formData) => dispatch(sessionStart(_formData)),
        signIn: () => dispatch(signIn())
    }
}

export default connect(null, mapDispatchToProps)(EmailForm)