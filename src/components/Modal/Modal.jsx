import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { BackDrop, ModalWindow, Img } from './Modal.styled'

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.clickEscape);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.clickEscape);
    }

    clickEscape = (event) => {
        if (event.code !== 'Escape') {
            return;
        }
        this.props.popap();
    }

    clickModal = (event) => {
        if (event.target !== event.currentTarget) {
            return;
        }
        this.props.popap();
    }
    render() {
        const { src, alt } = this.props;
        return createPortal(
            <BackDrop>
                <ModalWindow onClick={this.clickModal}>
                    <Img src={src} alt={alt}></Img>
                </ModalWindow>
            </BackDrop>,
        document.querySelector('#modal-root')
        );
    }
};
Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    popap: PropTypes.func.isRequired,
};