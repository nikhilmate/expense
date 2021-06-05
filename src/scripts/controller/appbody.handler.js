import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TransactionForm from '../components/sections/TransactionForm'

const HandleAppBody = (props) => {
    return (
        <>
            {/* <aside className="wrap__no-expense-action">
                <div className="in__no-expense">
                    <h2 className="h2__no-expense">Start your tracking by adding transactions</h2>
                    <button className="comn-btn btn__add-expense">Add transaction</button>
                </div>
            </aside> */}
            <TransactionForm />
        </>
    )
}
    
export default connect(null, null)(HandleAppBody)
