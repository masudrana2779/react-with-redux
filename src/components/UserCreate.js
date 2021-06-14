import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {userInfoData} from "./redux/action";

const UserCreate = ({items}) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')

    const submit = async (e) => {
        e.preventDefault();
        await dispatch(userInfoData([...items, {name: name, mobileNumber: mobileNumber}]))
    }
    return (
        <form onSubmit={submit}>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" name="mobileNumber" value={mobileNumber}
                   onChange={(e) => setMobileNumber(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UserCreate;