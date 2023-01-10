import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import Hello from '../Hello'

function Header(props) {
    console.log(props);
    // const [name, setName] = useState("Minh");
    return (
        <div style={{ textAlign: 'center', background: "green" }}>
            <p>This is component Header</p>
            {props.children}
        </div>
    )
}

Header.propTypes = {}

export default Header
