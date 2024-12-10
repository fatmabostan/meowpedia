import React from "react";

class Skeleton extends React.Component<{ count: number }, {}>{
  render() {
    return (
      <div className="flex flex-wrap gap-4 justify-center my-10">
      {Array.from({ length: this.props.count }).map((_, index) => (
        <div
          className="card bg-base-100 md:w-96 shadow-xl w-60 items-center border-4 border-black"
          key={index}
          aria-hidden="true"
        >
          <div className="flex w-52 flex-col gap-4 py-4 items-center">
            <div className="skeleton h-28 w-full"></div>
            <div className="skeleton h-6 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-9 w-24"></div>
          </div>
        </div>
      ))}
    </div>
   )
  }
}

export default Skeleton;
