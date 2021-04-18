import React,{useEffect} from 'react'
import './styles/Modal.css'
import {MdClose} from 'react-icons/md'

const Modal = ({showModal, setShowModal}) => {

    useEffect(() => {
       return showModal?  document.body.style.overflow = 'hidden' : 
       document.body.style.overflow = 'unset'
    })
    return (
        <>
            {showModal ?
                
          
                <div className="Background">
                
                    <div className="ModalWrapper">
                        <div className="ModalImg">
                            <div className="ModalImg-options">
                            <a>Levels</a>
                            <a>Popular Styles</a>
                            <a>Class Duration</a>
                            </div>
                        </div>
                    <div className="ModalContent">
                    
                            <div className="ModalContent-options">
                              <div className="ModalContent-options-child">
                              <label for="Beginner"> Beginner</label>
                              <label for="Intermediate">Intermediate</label>
                              <label for="Advanced">Advanced</label>
                              <label for="All Classes">All Classes</label>
                             </div>

                             <div className="ModalContent-options-child-input">
                             <input type="checkbox" id="Beginner" name="Beginner" value="Beginner"/><br/>
                             <input type="checkbox" id="Intermediate" name="Intermediate" value="Intermediate"/><br/> 
                             <input type="checkbox" id="Advanced" name="Advanced" value="Advanced"/><br/>
                             <input type="checkbox" id="All Classes" name="All Classes" value="All Classes"/><br/>
                             </div>
                             </div>
                    </div>
                    </div>
                <div className="ClosedModalButton">
                    <MdClose aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>
                </div>
                </div>
            : null}
        </>
    )
}

export default Modal
