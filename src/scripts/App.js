import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import createStoreInstance, {history} from './store/AppStore'
import Main from './controller/main.handler'

const store = createStoreInstance()

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Main />
        </ConnectedRouter>
    </Provider>
)

export default App
