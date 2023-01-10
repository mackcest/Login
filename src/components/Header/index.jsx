import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Hello from '../Hello'

function Header(props) {
    const [name, setName] = useState("Minh");
    return (
        <div style={{ textAlign: 'center' }}>
            Header
        </div>
    )
}

Header.propTypes = {}

export default Header
