import {useDispatch} from "react-redux";
import {setInfo} from "./redux/action";

const Counter = () => {

    const dispatch  = useDispatch();
    return (
        <div>
                <input type={'number'} onChange={(event)=> dispatch(setInfo(event.target.value)) } />
        </div>
    )
}
export default Counter;