import React from 'react'
import { connect } from 'react-redux'
import { onboardingDone } from '../../actions/sessionActions'
import { OnboardingIcon } from '../../utils/icons.utils'

const Onboard = ({ onBoardingHandler }) => (
    <div className="wrap__onboard-box">
        <div className="wrap__onboard-icon">
            <OnboardingIcon width={120} height={120} />
        </div>
        <h1 className="h1_onboard-main">Welcome to <span className="main-title">Expense Tracker</span></h1>
        <h2 className="h2_onboard-main">Easy and simple dashboard to track your expenses.</h2>
        <button onClick={onBoardingHandler} className="comn-btn btn_get-started">Get Started</button>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return { onBoardingHandler: () => dispatch(onboardingDone())}
}

export default connect(null, mapDispatchToProps)(Onboard)