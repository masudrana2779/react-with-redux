import './App.css';
import {useSelector} from "react-redux";
import UserCreate from "./components/UserCreate";

function App() {
    const {data, loading, error} = useSelector(state => state.userInfoReducer);
    return (
        <div className="App">

            <UserCreate items={data}/>

            {
                loading ? "Loading ... " : data && data.length > 0 && data.map((i, item) =>
                    <p>{item.name}</p>
                )
            }
        </div>
    );
}

export default App;
