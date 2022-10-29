import React from "react";
import {useSelector} from "react-redux";


const HelloReduxExampleComponent = () => {
    // const message = useSelector((hello) => hello.message);
    const message = useSelector((state) => state.hello.message)
    return (
        <div>
            <h3>{message}</h3>
        </div>
    )
}

export default HelloReduxExampleComponent