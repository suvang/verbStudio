import React, {useState} from 'react'
import Modal from './Modal.js'
import './styles/FindClass.css'

const FindClass = () => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev);
        
    }

    return (
        <>
        <div class="input col s4">
        <div className="input-find">
        <a onClick={openModal} style={{color:'#c5c5c5'}}>Find Class</a>
        </div>
        </div>

        <Modal showModal={showModal} setShowModal={setShowModal}/>
        </>
     
        
    )
}

export default FindClass
