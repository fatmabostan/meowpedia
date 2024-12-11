import React from "react";
import { Link } from "react-router";
import Modal from "./Modal";
interface Cats {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}
export interface CardProps {
  cat: Cats;
}
class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="card bg-base-100 md:w-96 shadow-xl w-72 border-4 border-black">
        <figure className="px-10 pt-10">
          <img
            src={this.props.cat.imgUrl}
            alt="cat-img"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{this.props.cat.title}</h2>
          <p>{this.props.cat.description}</p>
          <div className="card-actions">
            <Modal cat={this.props.cat} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
