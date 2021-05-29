import React, { useEffect, useState } from 'react'
import { LoaderIcon, OnboardingIcon } from '../../utils/icons.utils'

const EmailForm = () => {
    const [firstLoad, setFirstLoad] = useState(false)
    useEffect(() => {
        setFirstLoad(true)
    }, [firstLoad])
    return (
        <div className={`wrap__onboard-form ${firstLoad ? 'animation-on-pause' : ''}`}>
            <div className="wrap__sign-form-icon">
                <OnboardingIcon width={60} height={60} />
            </div>
            <h1 className="h1_onboard-form">Sign In</h1>
            <h2 className="h2_onboard-main">Start your expense tracker by signing the form.</h2>
            <div className="wrap__sign-in-box">
                <form className="form__sign-in">
                    <div className="wrap__input-field">
                        <input type="text" name="email-address" class="comn-input-form input__email-form" placeholder="Email address" />
                    </div>
                    <div className="wrap__submit-field">
                        <button className="comn-btn btn__sign-form">Sign In</button>
                    </div>
                </form>
            </div>
            <div className="wrap__form-loader">
                <div className="loader-shield">
                    <LoaderIcon />
                </div>
            </div>
        </div>
    )
}

export default EmailForm