import React from "react";

class CheckboxField extends React.Component<{label: string, options: string[]}> {
  render() {
    return (
      <div>
          <label className="cursor-pointer label px-0">
            <span className="label-text">{this.props.label}</span>
            <div className="flex flex-row gap-20">
            {this.props.options.map((name: string, index: number) => (
            <div key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-error"
            />
            <span className="label-text">{name}</span>
            </div>))}
            </div>
          </label>
        </div>
    );
  }
}

export default CheckboxField;
