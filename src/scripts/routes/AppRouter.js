import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from '../components/pages/Dashboard'
import Onboarding from '../components/pages/Onboarding'
import AppLoader from '../components/sections/AppLoader'

const AppRouter = () => (
    <AppLoader>
        <Switch>
            <Route path="/" exact={true} component={Onboarding} />
            <Route path="/app" exact={true} component={Dashboard}/>
            <Route render={() => <div>not found</div>} />
        </Switch>
    </AppLoader>
)

export default AppRouter
