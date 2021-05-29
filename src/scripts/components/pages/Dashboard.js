import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Appbody from '../sections/Appbody'
import Sidebar from '../sections/Sidebar'

const Dashboard = ({ isSidebarVisible }) => {
    
    return (
        <main className="main__viewport">
            <main className="main__container">
                <main className={`main__app main-dashboard ${isSidebarVisible ? 'active--sidebar' : ''}`}>
                    <Sidebar />
                    <Appbody />
                </main>
            </main>
        </main>
    )
}

const mapStateToProps = (state) => {
    const { dom } = state
  return { isSidebarVisible: dom.sidebar.visible  }
}

export default connect(mapStateToProps, null)(Dashboard)