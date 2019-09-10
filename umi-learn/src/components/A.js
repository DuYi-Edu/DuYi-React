import React from 'react'
import withRouter from "umi/withRouter"

function A(props) {
    return (
        <div>
            {props.location.pathname}
        </div>
    )
}

export default withRouter(A);