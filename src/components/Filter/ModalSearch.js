import React,{useEffect,useState} from 'react'
import './styles/ModalSearch.css'
import {MdClose} from 'react-icons/md'

const ModalSearch = ({showModal, setShowModal,data}) => {
    const [searchTerm,setSearchTerm] = useState('')

    useEffect(() => {
        return showModal?  document.body.style.overflow = 'hidden' : 
        document.body.style.overflow = 'unset'
     })
    return (
       <>
        {showModal ?
                
          
                <div className="Background-Search">
                    
                    <div className="ModalWrapper-Search">
                            
                    <div className="Modal-Search-Content">
                    <input onChange={event => {setSearchTerm(event.target.value)}}  className="browser-default" type="text" placeholder="SEARCH"/>

                            <div className="Modal-Search-Content-options">
                              <div className="ModalContent-options-child">
                                
                                  {
                                       [...data].filter((val)=> {
                                           if(searchTerm == ""){
                                               return val
                                           } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                               return val
                                           }
                                       }).map((item,key) => {
                                          return (
                                            <div>
                                            <div className="image-search" style={{backgroundImage: `url(${item.thumbnail_image})`}}>
                
                                             {/* <img src={item.thumbnail_image}/> */}
                                             <div className="image-search-classname">
                                             <p  style={{color:'white'}}>{item.class_name}</p>
                                             </div>
                
                                             <div className="image-search-detail">
                                              <div className="image-search-detail-child">
                                             <p  className="image-search-child-title" style={{position:'relative', bottom:'-20px'}}>INSTRUCTOR</p>
                                             <p  className="image-search-child-title">STYLE </p>
                                             
                                             </div>
                
                                             <div className="image-search-detail-child">
                                             <p className="image-search-title-name" style={{position:'relative', bottom:'-20px'}}>{item.name}</p>
                                             <p   className="image-search-title-name">{item.style}</p> 
                                             </div>
                                             </div>
                                            </div>
                                            </div>
                                          )
                                       })
                                  }
                                
                              
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

export default ModalSearch
