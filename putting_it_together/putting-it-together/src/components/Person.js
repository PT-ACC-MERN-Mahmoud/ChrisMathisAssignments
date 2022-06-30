import React, {useState} from "react";

const Person = (props) => {
    const [age, newAge] = useState(props.startAge);
    return(
        <div>
            <h1>{props.name}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hair}</p>
            <button onClick={(event) => newAge(age + 1)}>Birthday for {props.name}</button>
        </div>
    )
}

export default Person