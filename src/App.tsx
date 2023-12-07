import "./App.css";
import Landing from "./components/Landing";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div
            className=""
        >
            <ToastContainer position='top-center'/>
            <Landing />
        </div>
    );
}

export default App;
