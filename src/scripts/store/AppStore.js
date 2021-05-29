import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import SessionReducer from '../reducers/SessionReducer'
import DomReducer from '../reducers/DomReducer'
import LoaderReducer from '../reducers/LoaderReducer'
import { getStorageItem, setStorageItem, reduceNonSavedState } from '../utils/helper.utils'
import { INIT_LOADER_STATE } from '../utils/reducer.utils'

const enhancers = []
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
    if (typeof devToolsExtension === 'function')
        enhancers.push(devToolsExtension())
}

export const history = createBrowserHistory()
const rootReducer = combineReducers({
    router: connectRouter(history),
    session: SessionReducer,
    dom: DomReducer,
    ui_loader: LoaderReducer
})
const middleware = [thunk, routerMiddleware(history)]
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

// attach localstorage
let localData = getStorageItem()
let derivedState = ((_localData) => {
    if (_localData) return { ..._localData, ui_loader: { ...INIT_LOADER_STATE } }
    else return null
})(localData)

const AppStore = () => {
    let _store
    if (derivedState) _store = createStore(rootReducer, derivedState, composedEnhancers)
    else _store = createStore(rootReducer, composedEnhancers)
    
    _store.subscribe(() => {
        console.log('State after dispatch: ', _store.getState())
        setStorageItem(reduceNonSavedState(_store.getState()))
    })
    return _store
}

export default AppStore
