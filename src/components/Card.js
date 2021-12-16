import React from 'react'
import './Card.css'
import { Modal, ModalBody,Button } from 'reactstrap';


class Card extends React.Component {

    state = {
        abierto: false,
        confirmacion: false
    }


    abrirModal = () => {
        this.setState({ abierto: !this.state.abierto });
        
    }

    render() {

        const modalStyles = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-100%)",
            border: "20%"
        }

        return (
            <>
                <div className='container'>
                    <div className='imagen' onClick={this.abrirModal}>
                        <img src='https://i.pinimg.com/236x/ad/1c/c5/ad1cc554a52e7f94f7fcff770d5c0671.jpg' alt='img'></img>
                    </div>
                    <div className='title'>
                        <h2>Hincapie</h2>
                    </div>
                    <div className='precio'>
                        <h3>35$</h3>
                    </div>
                    <div className='description'>
                        Camiseta Deportiva
                    </div>
                    <div className='boton'>
                        <button>
                            Adquirir
                        </button>
                    </div>
                </div>


                <Modal className='modal' isOpen={this.state.abierto} style={modalStyles} >
                    <ModalBody className='modalbody'>
                        <img src='https://i.pinimg.com/236x/ad/1c/c5/ad1cc554a52e7f94f7fcff770d5c0671.jpg' alt='img'></img>
                        <Button className='boton' onClick={this.abrirModal}> Cerrar</Button>  
                    </ModalBody>
                </Modal>

            </>
        )
    }

}

export default Card
