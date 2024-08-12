import React from "react";
import Switch from "react-switch";

const InternalSwitch = ({handleToggle}) => {

    const [checked, setChecked] = React.useState(true)

    const handleChecked = (val) => {
        setChecked(val);
        handleToggle(val);
    }

    return (
        <label>
            <h2>Toggle Visibility of Banner</h2>
            <Switch onChange={() => handleChecked(!checked)} checked={checked} />
        </label>
    );
}

export default InternalSwitch;