import './App.css';
import {useSelector} from "react-redux";
import UserCreate from "./components/UserCreate";
import TestRedux from "./components/testRedux/testRedux";

function App() {
    const {data, loading, error} = useSelector(state => state.userInfoReducer);
    console.log(data,545421);
    return (
        <div className="App">
            <TestRedux items={data} />
            <p>
                {data}
            </p>
        </div>
    );
}

export default App;
