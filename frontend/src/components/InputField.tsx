import React from "react";
interface InputFieldProps{
    label: string, 
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
            <div className="flex flex-row gap-4 items-center justify-between">
            <span>{this.props.label}</span>
            <input
              type={this.props.type}
              placeholder={this.props.placeholder}
              className="input border-green-600 w-96"
              value={this.state.change}
              onChange={(e) => this.setState({change: e.target.value}) }
            />
          </div>
        )
    }
}

export default InputField