import React from 'react'

class Modal extends React.Component{
    render(){
        return (
            <div className="modal">
                {this.props.text}
            </div>
        )
    }
}

export default Modal