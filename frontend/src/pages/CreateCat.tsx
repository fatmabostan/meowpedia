import React from "react";
import InputField from "../components/InputField";
interface CreateCatState {
    title: string;
    description: string;
    imgUrl: string;
    city: string;
    email: string;
  
}

class CreateCat extends React.Component<{}, CreateCatState> {
  constructor(props: any) {
    super(props);
    this.state = {
        title: "",
        description: "",
        imgUrl: "",
        city: "",
        email: "",
      
    };
  }

  render() {
    return (
      <div>
      <InputField type="text" placeholder="enter your email" badge="required" />
      <InputField type="text" placeholder="enter your email" badge="required" />
      <InputField type="text" placeholder="enter your email" badge="required" />
      <InputField type="text" placeholder="enter your email" badge="required" />
      <button className="btn">
  <span className="loading loading-spinner"></span>
  loading
</button>
     
      </div>
    );
  }
}

export default CreateCat;
