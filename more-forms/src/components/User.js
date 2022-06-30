import React, {useState} from "react";

const User = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    return(
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            {firstname.length < 2 && firstname.length > 0 ? (<p>First Name must be 2 characters minimum!</p>) : null}
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            {lastname.length < 2 && lastname.length > 0 ? (<p>Last Name must be 2 characters minimum!</p>) : null}
            <div>
                <label>Email Address: </label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            {email.length < 5 && email.length > 0 ? (<p>Email must be 5 characters minimum!</p>) : null}
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            {password.length < 8 && password.length > 0 ? (<p>Password must be 8 characters minimum!</p>) : null}
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
            </div>
            {confirm !== password ? (<p>Passwords do not match!</p>) : null}
        </form>

    );
};

export default User;
