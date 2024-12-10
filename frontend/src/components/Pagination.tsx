import React from "react";

interface PaginationProps {
  pages: number; 
  currentPage: number;
  onPageChange: (page: number) => void; 
}

class Pagination extends React.Component<PaginationProps> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageNumber = parseInt(event.target.value, 10);
    this.props.onPageChange(pageNumber);
  };

  render() {
    return (
      <div className="join mt-10">
        {Array.from({ length: this.props.pages }, (_, index) => (
          <input
            key={index}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            value={index + 1}
            aria-label={`${index + 1}`}
            checked={this.props.currentPage === index + 1}
            onChange={this.handleChange}
          />
        ))}
      </div>
    );
  }
}

export default Pagination;
