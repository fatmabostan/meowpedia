import React from "react";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField"
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
      <div className="flex h-screen items-center justify-center">
        <div className="indicator border-black border-2 p-24 flex flex-col gap-4">
          <span className="indicator-item badge">Bilgileri Girin</span>
          <InputField
            type="text"
            placeholder="enter your email"
            badge="required"
          />
          <SelectField />
        </div>
      </div>
    );
  }
}

export default CreateCat;
