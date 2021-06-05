import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import Select from '../dom/Select'
import { CalendarIcon } from '../../utils/icons.utils'
import { getFormat, getFormatArr, getHour, getHourArr, getMinArr, getMins } from '../../utils/view.utils'

const TransactionForm = (props) => {
    let currentDate = new Date()
    let [datePickState, setDatePickState] = useState(currentDate.getTime())
    let [hourState, setHourState] = useState(getHour(currentDate))
    let [minState, setMinState] = useState(getMins(currentDate))
    let [formatState, setFormatState] = useState(getFormat(currentDate))

    const datePickerHandler = (date) => {
        setDatePickState(date);
    }
    
    const hourPickerHandler = (hour) => {
        setHourState(hour);
    }

    const minPickerHandler = (minute) => {
        setMinState(minute);
    }

    const formatPickerHandler = (format) => {
        setFormatState(format);
    }

    return (
        <>
            <aside className="wrap__transact-action wrap__comn-box">
                <div className="in__transact-action in__comn-box">
                    <h2 className="h2__transact-title">Add transaction</h2>
                    <div className="wrap__transact-form">
                        <form className="form__transact-action">
                            <div className="wrap__form-grp">
                                <div className="col-left">
                                    <label htmlFor="trans_description">Description</label>
                                </div>
                                <div className="col-right">
                                    <input type="text" name="trans_description" autoComplete="off" id="trans_description" className="comn-input input__transact-formm" placeholder="e.g. Birthday cake" />
                                </div>
                            </div>
                            <div className="wrap__form-grp">
                                <div className="col-left">
                                    <label htmlFor="trans_amount">Amount</label>
                                </div>
                                <div className="col-right">
                                    <input type="number" name="trans_amount" autoComplete="off" id="trans_amount" className="comn-input input-amount input__transact-formm" placeholder="e.g. 100" />
                                    <span className="comn-form-icon amount-icon">INR</span>
                                </div>
                            </div>
                            <div className="wrap__form-grp">
                                <div className="col-left">
                                    <label htmlFor="trans_date">Date</label>
                                </div>
                                <div className="col-right col-date-time">
                                    <div className="wrap__date-picker">
                                        <DatePicker
                                            name="date_select"
                                            id="trans_date"
                                            className="select__date-picker"
                                            selected={datePickState}
                                            onChange={datePickerHandler}
                                            showMonthDropdown
                                            minDate={currentDate}
                                            showYearDropdown
                                            dropdownMode="select"
                                        />
                                        <span className="comn-form-icon calendar-icon">
                                            <CalendarIcon />
                                        </span>
                                    </div>
                                    <div className="wrap__time-picker">
                                        <div className="wrap_time-picker-num">
                                            <Select
                                                attributes={{
                                                    className: "comn_form_select time-picker-select",
                                                    name: "time_picker_hour",
                                                    id: "time_picker_hr"
                                                }}
                                                options={getHourArr()}
                                                defaultOption={hourState}
                                                onChangeHandler={hourPickerHandler}
                                            />
                                            <span className="colon-space"> : </span>
                                            <Select
                                                attributes={{
                                                    className: "comn_form_select time-picker-select",
                                                    name: "time_picker_min",
                                                    id: "time_picker_min"
                                                }}
                                                options={getMinArr()}
                                                defaultOption={minState}
                                                onChangeHandler={minPickerHandler}
                                            />
                                        </div>
                                        <div className="time-picker-format ml-10">
                                            <Select
                                                className="comn_form_select time-meridian"
                                                id="time_picker_format"
                                                name="time_picker_format"
                                                attributes={{
                                                    className: "comn_form_select time-meridian",
                                                    name: "time_picker_format",
                                                    id: "time_picker_format"
                                                }}
                                                options={getFormatArr()}
                                                defaultOption={formatState}
                                                onChangeHandler={formatPickerHandler}
                                            />
                                        </div>    
                                    </div>
                                </div>
                            </div>
                            <div className="wrap__form-grp">
                                <button className="comn-btn btn__transact-form">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </aside>
        </>
    )
}
    
export default connect(null, null)(TransactionForm)
