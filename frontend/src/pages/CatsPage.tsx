import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Skeleton from "../components/Skeleton";
import Pagination from "../components/Pagination";

interface CardState {
  cats: any[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
}

class CatsPage extends React.Component<{}, CardState> {
  constructor(props: any) {
    super(props);
    this.state = {
      cats: [],
      loading: false,
      currentPage: 1,
      totalPages: 0,
    };
  }

  componentDidMount(): void {
    this.handleFetch();
  }

  handleFetch(): void {
    this.setState({ loading: true });
    fetch(`http://localhost:5000/cats?page=${this.state.currentPage}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          cats: data.cats,
          loading: false,
          totalPages: data.pages,
        })
      )
      .catch((err) => {
        console.log(err.message);
        this.setState({ loading: false });
      });
  }

  handlePageChange = (newPage: number): void => {
    console.log("BURA ÇALIŞTI");
    if (newPage !== this.state.currentPage) {
      this.setState({ currentPage: newPage }, this.handleFetch);
    }
  };

  render() {
    if (this.state.loading) {
      return (<div>
        <Navbar />
        <Skeleton count={9} />
        <Footer />
        </div>)
    }

    return (
      <div>
        <Navbar />
        <div className="flex flex-col items-center my-10">
        <div className="flex flex-wrap gap-6 justify-center">

          {
            this.state.cats.map((cat, index) => (
                <Card key={index} cat={cat} />
            ))
          }
          </div>
          <Pagination
            pages={this.state.totalPages}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default CatsPage;
