import React from "react";
import { Navigate } from "react-router-dom";

//class componentlerde props otomatik olarak props olarak bileşen tarafından alınır.
//function App(props) gibi bir kullanıma gerek yoktur, direkt içeride {this.props.type} ile kullanılabilir.
//props gönderimi yine funclardaki gibi <App type="class" /> seklinde yapılır
//<Props, State>
// render() component ilk oluştuğunda(mount) ve her state ile props değişiminde tetiklenir
// componentDidMount() component upload edilir edilmez tetiklenir --> API ya da display name/ useEffect(() => {}, []) ile benzer
/*
render
mount
render
update

*/

interface HeroSectionState {
  redirectToCats: boolean;
}

class HeroSection extends React.Component<{}, HeroSectionState> {
  constructor(props: {}) {
    super(props);
    // `this.handleButtonClick` metodunu bağlamak için `bind` kullanılır, tüm karmaşa arasında this
    // kaybolduğu için undefined tanımlanıyor, o yüzden bağlıyoruz
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = { redirectToCats: false };
  }

  //state always be an object
  /*
  state = {
    redirectToCats: false, 
  };
  */

  // bind kullanılmak istenmiyorsa ARROW FUNC kullanılmak zorunda
  handleButtonClick() {
    //state obje olduğu için obje göndermeli, normalde return kullanılır
    this.setState({ redirectToCats: true });
  }

  render() {
    //any display logic can be placed here
    if (this.state.redirectToCats) {
      return <Navigate to="/cats" />;
    }

    const randomImg: number = Math.floor(Math.random() * 14) + 1;

    return (
      <div>
      
  </div>
    );
  }
}

export default HeroSection;
