import React from "react";
import { useParams } from "react-router-dom";

const Var = (props) => {
    const {word, color, bgColor} = useParams();

    return(
        <div>
            {
                isNaN(word)?
                <h1 style={
                    color?
                    {color: color, backgroundColor: bgColor}
                    :
                    null}
                    >This is the word: {word}!</h1>
                :
                <h1>This is the number:{word}!</h1>
            }
        </div>
    )
}

export default Var;