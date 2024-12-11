import React from "react";
import { CardProps } from "./Card";

class Modal extends React.Component<CardProps>{
  render() {
    return (
      <div>
        <label htmlFor="my_modal_7" className="btn bg-primary">
          Detaylar
        </label>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">{this.props.cat.title}</h3>
            <p className="py-4">{this.props.cat.description}</p>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </div>
    );
  }
}

export default Modal;
