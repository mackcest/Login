import React from 'react'
import PropTypes from 'prop-types'
import Child1 from './Child1'
import Child2 from './Child2'
import { MyProvider } from '.'

function Parent(props) {
    return (
        <div>
            <MyProvider>
                <div>
                    <Child1 />
                    <Child2 />
                </div>
            </MyProvider>
        </div>
    )
}

Parent.propTypes = {}

export default Parent
