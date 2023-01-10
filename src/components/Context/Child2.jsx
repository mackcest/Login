import React from 'react'
import PropTypes from 'prop-types'
import { MContext } from '.'

function Child2(props) {
    return (
        <div style={{ width: "100%", height: "200px", background: "green" }}>
            <MContext.Consumer>
                {(context) => (<p>{context.state.message}</p>)}
            </MContext.Consumer>
        </div>
    )
}

Child2.propTypes = {}

export default Child2
