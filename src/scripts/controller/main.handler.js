import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import AppRouter from '../routes/AppRouter'

const Main = (props) => {
    useEffect(() => {
        if (props.logged) loggedRedirect()
        else defaultRedirect()
    })

    const loggedRedirect = () => {
        let _location = props.location.pathname
        if(_location === '/') props.history.replace('/app')
    }

    const defaultRedirect = () => {
        let _location = props.location.pathname
        if(_location !== '/') props.history.replace('/')
    }

    return (
        <>
            <AppRouter />
        </>
    )
}
    
const mapStateToProps = (state) => {
    const { session } = state
    return {
        logged: session.logged
    }
}

export default withRouter(connect(mapStateToProps, null)(Main))
