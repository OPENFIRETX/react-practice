import React from 'react';

const Action = (props) => {

    const data = "子组件"



    const click = () => {

        props.getAction(data)
    }

    return (
        <span style={{ marginLeft: "20px" }}>

            <button onClick={click}>{props.action}</button>

        </span>
    );
};

export default Action;