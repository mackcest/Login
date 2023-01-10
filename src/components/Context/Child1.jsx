import React from 'react'
import PropTypes from 'prop-types'
import { MContext } from '.'

function Child1(props) {
    return (
        <div style={{ width: "100%", height: "200px", background: "red" }}>
            <MContext.Consumer>
                {(context) => (
                    <button onClick={() => {context.setMessage("Minh Minh") }}>Send</button>
                )}
            </MContext.Consumer>
        </div>
    )
}

Child1.propTypes = {}

export default Child1
