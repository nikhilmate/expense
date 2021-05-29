import React from 'react'
import { connect } from 'react-redux'
import { toggleSidebar } from '../../actions/domActions'
import Header from '../dom/Header'

const Appbody = ({ isSidebarVisible, toggleSidebarVisible }) => {
    
    const overlayClickHandler = () => toggleSidebarVisible({ toggleState: !isSidebarVisible }) 

    return (
        <section className="section__appbody">
            <Header />
            <div className="wrap__scroll-appbody"></div>
            <div onClick={(overlayClickHandler)} className="sidebar--overlay"></div>
        </section>
    )
}

const mapStateToProps = (state) => {
  const { dom } = state
  return { isSidebarVisible: dom.sidebar.visible }
}

const mapDispatchToProps = (dispatch) => {
  return { toggleSidebarVisible: (toggleState) => dispatch(toggleSidebar(toggleState)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Appbody)
