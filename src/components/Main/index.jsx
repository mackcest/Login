import React from 'react'
import PropTypes from 'prop-types'

function MainConcept(props) {
    console.log(props);
    const sendData = () => {
        props.parentCallback("Dung");
    }

    return (
        <div style={{ background: "red", alignItems: 'center', width: '100%', height: '200px' }}>
            <button onClick={sendData}>Gửi</button>
        </div>
    )
}

export default MainConcept;

MainConcept.propTypes = {}