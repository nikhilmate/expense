import React, { Component } from 'react'

class Select extends Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.defaultOption !== nextProps.defaultOption) {
            return true
        }
        return false
    }

    onSelectHandler = (event) => {
        let value = event.currentTarget.value
        this.props.onChangeHandler(value)
    };

    render() {
        let options = typeof this.props.options == 'object' && this.props.options.length > 0 ? this.props.options : []
        let defaultOption = this.props.defaultOption ? this.props.defaultOption.toString() : options[0]
        let attributes = this.props.attributes ? this.props.attributes : {}
        return (
            <select
                onChange={this.onSelectHandler}
                value={defaultOption}
                {...attributes}
            >
                {options.map((option, i) => typeof option == 'object' ?
                    (
                        <option key={i} value={option.value}>
                            {option.name}
                        </option>
                    ) :
                    (
                        <option key={i} value={option}>
                            { option}
                        </option>
                    )
                )}
            </select>
        )
    }
}

export default Select