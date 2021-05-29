import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { setAppLoader } from '../../actions/domActions'
import { LoaderIcon } from '../../utils/icons.utils'

const AppLoader = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.setApploading({ apploading: false })
        }, 1500);
    })
    return (
        <>
            {
                props.apploading &&
                    <div className="main__loader">
                        <div className="wrap__loader-ui">
                            <LoaderIcon className="apploader-icon" width={160} height={160} />
                        </div>
                    </div>
            }
            {props.children}
        </>
    )
}

const mapsStateToProps = (state) => {
    return { apploading: state.ui_loader.apploading }
}

const mapDispatchToProps = (dispatch) => {
  return { setApploading: (loaderState) => dispatch(setAppLoader(loaderState)) }
}

export default withRouter(connect(mapsStateToProps, mapDispatchToProps)(AppLoader))