import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import MainConcept from '../Main'

function Hello(props) {
    const [isLoading, setisLoading] = useState(true);
    const [isLoading1, setisLoading1] = useState(false);
    const [getToChild, setGetToChild] = useState("");

    // calll api login - 200  - setLoading = true 
    const callbackFunction = (childData) => {
        setGetToChild(childData);
    }

    console.log("Nhan", getToChild);
    return (
        <>
            {
                isLoading ?
                    <div>
                        <p>{getToChild}</p>
                        <MainConcept parentCallback={callbackFunction} />
                    </div>
                    :
                    <div>
                        <Header name="Dung" pass="123">
                            <div style={{ background: "blue", alignItems: 'center', width: '100%', height: '200px' }}>
                                This is component Hello
                            </div>
                        </Header>
                    </div>
            }

        </>
    )
}

Hello.propTypes = {}

export default Hello
