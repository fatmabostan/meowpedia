import React from "react";

interface SelectFieldProps {
    label: string;
    placeholder: string;
    options: { value: string; label: string }[];
}
class SelectField extends React.Component<SelectFieldProps>{
  render() {
    return (
      <div className="flex flex-row items-center justify-between">
        <span>{this.props.label}</span>
        <select className="select select-accent px-24">
          <option disabled selected>
            {this.props.placeholder}          
        </option>
          {
            this.props.options.map((option, index) => (
              <option key={index} value={option.value} >
                {option.label}
              </option>
            ))
          }
        </select>
      </div>
    );
  }
}

export default SelectField;
