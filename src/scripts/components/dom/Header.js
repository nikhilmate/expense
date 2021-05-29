import React from 'react'
import { connect } from 'react-redux'
import { toggleSidebar } from '../../actions/domActions'

const Header = ({ isSidebarVisible, toggleSidebarVisible}) => {
    const menuToggleHandler = (e) => {
        toggleSidebarVisible({ toggleState: !isSidebarVisible }) 
    }

    return (
        <header className="header__main">
            <div className="container__main">
                <div className="align__header-content">
                    <div className="wrap__menu-icon">
                        <button onClick={menuToggleHandler} className="btn__menu-icon comn-btn">
                            <span className="wrap__menu-i">
                                <span className="i-menu i-menu-1st"></span>
                                <span className="i-menu i-menu-2nd"></span>
                                <span className="i-menu i-menu-3rd"></span>
                            </span>
                        </button>
                    </div>
                    <div className="wrap__app-heading">
                        <h1 className="h1__app-heading">Expense Tracker</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
  const { dom } = state
  return { isSidebarVisible: dom.sidebar.visible }
}

const mapDispatchToProps = (dispatch) => {
  return { toggleSidebarVisible: (toggleState) => dispatch(toggleSidebar(toggleState)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)