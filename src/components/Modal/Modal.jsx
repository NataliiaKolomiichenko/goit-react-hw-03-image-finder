import css from "./Modal.module.css"
import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');


class Modal extends Component {

    handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onToggle();
    }
  };


  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    }
    
    render() {
      const { onToggle, largeImage } = this.props;
      return (createPortal(
          <div className={css.overlay} onClick={onToggle}>
                <div className={css.modal}>
                    <img src={largeImage} alt="" />
                </div>
            </div>, modalRoot
        )
      )
    }
}

export default Modal;