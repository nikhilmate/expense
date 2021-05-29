import React from 'react'
import { AccountIcon, DashboardIcon, LogoIcon, SetingsIcon } from '../../utils/icons.utils'

const Sidebar = () => {
    return (
        <section className="section__sidebar">
            <div className="in__sidebar">
                <div className="wrap__logo-icon">
                    <div className="logo-icon-oval">
                        <LogoIcon
                            width="120"
                            height="120"
                            className="dl-blk"
                        />
                    </div>
                </div>
                <nav className="mav__main__navig">
                    <ul className="ul__main__navig">
                        <li className="navig-itm-1">
                            <span className="comn-navig-icon">
                                <DashboardIcon className="dl-blk" />
                            </span>
                            <span className="comn-navig-txt">Dashboard</span>
                        </li>
                        <li className="navig-itm-2">
                            <span className="comn-navig-icon">
                                <AccountIcon className="dl-blk" />
                            </span>
                            <span className="comn-navig-txt">Account</span>
                        </li>
                        <li>
                            <span className="comn-navig-icon">
                                <SetingsIcon className="dl-blk" />
                            </span>
                            <span className="comn-navig-txt">Settings</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Sidebar
