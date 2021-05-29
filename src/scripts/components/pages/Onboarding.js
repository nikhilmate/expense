import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import EmailForm from '../sections/EmailForm'
import Onboard from '../sections/Onboard'

const Onboarding = (props) => {
    return (
        <main className="main__viewport">
            <main className="main__container">
                <main className="main__app main-onboarding">
                    <section className="section__onboarding">
                        {
                            props.onboarding ? <><EmailForm /></> : <><Onboard /></>
                        }
                    </section>
                </main>
            </main>
        </main>
    )
}
    
const mapStateToProps = (state) => {
    const { session } = state
    return {
        onboarding: session.onboarding,
        logged: session.logged
    }
}

export default withRouter(connect(mapStateToProps, null)(Onboarding))