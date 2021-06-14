import {useDispatch} from "react-redux";
import {setDataFromAPI} from "./redux/action";

const TestRedux = ({items}) => {
    console.log(items, 'asdasd')
    const dispatch = useDispatch();
    return (
        <>
            <input type="text" onChange={(e) => dispatch(setDataFromAPI(e.target.value))}/>
            <br/>
            <p>{items}</p>
        </>
    )
}
export default TestRedux;