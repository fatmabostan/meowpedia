import React from "react"

class SelectField extends React.Component {
    render() {
        return (
            <div className="flex flex-row gap-4 items-center">
<span>Theme</span>
            <select className="select select-accent w-full max-w-xs">
            <option disabled selected>Dark mode or light mode?</option>
            <option>Auto</option>
            <option>Dark mode</option>
            <option>Light mode</option>
          </select>
          </div>
        )
    }
}

export default SelectField