import React from "react";
interface InputFieldProps{
    badge: string, 
    type: string,
    placeholder: string
}

interface InputFieldState{
    change: string
}
class InputField extends React.Component<InputFieldProps, InputFieldState>{
    constructor(props: InputFieldProps){
        super(props)
        this.state = {
            change:""
        }
    }

    render(){
        console.log(this.state.change)
        return(
            <div className="indicator">
            <span className="indicator-item badge">{this.props.badge}</span>
            <input
              type={this.props.type}
              placeholder={this.props.placeholder}
              className="input input-bordered"
              value={this.state.change}
              onChange={(e) => this.setState({change: e.target.value}) }
            />
          </div>
        )
    }
}

export default InputField