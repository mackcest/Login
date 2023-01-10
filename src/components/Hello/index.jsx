import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Hello(props) {
    return (
        <div>
            <p style={{ textAlign: "center" }}>HOME</p>
            <p>{props.name}</p>
        </div>
    )
}

Hello.propTypes = {}

export default Hello
