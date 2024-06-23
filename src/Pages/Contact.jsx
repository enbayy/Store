import React, { useState } from 'react'
import './Contact.css'
import Navbar from '../components/Navbar'

function Contact() {

    const [data, setData] = useState('')
    const [name, setName] = useState('')

    const clearInput = () => {
        setData('')
    }

    const targetFunc = (e) => {
        setData(e.target.value)
    }

    const setClick = () => {
        setName(data)
    }

    const saveClick = () => {
        setName(data)
        clearInput()
    }

    const removeClick = () => {
        setName('')
        clearInput();
    }

    return (

        <div> <Navbar />
            <div className='page-wrapper'>
                <div className='all'>
                    <div className='contact'>Contact</div>
                    <div>
                        <form className='form'>
                            <div className='info'>
                                <div className='inpo'>
                                    <input value={data} onChange={targetFunc} className='input-text' type="text" placeholder='Name' />
                                </div>
                                <div className='inpo'>
                                    <input className='input-text' type="text" placeholder='Surname' />
                                </div>
                            </div>
                            <input className='input-mail' type="email" placeholder='e-mail' />
                            <input className='input-number' type="number" placeholder='Phone Number' />
                            <textarea className='textarea' placeholder='Enter Text'></textarea>
                        </form>
                    </div>
                    <div className='buttons'>
                        <button onClick={removeClick} className='clear-button'>Clear</button>
                        <button onClick={saveClick} className='save-button'>Save</button>
                        <button onClick={setClick} className='send-button'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
