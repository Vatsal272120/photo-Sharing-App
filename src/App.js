import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widjet from "./Components/Widjet";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <>
          {" "}
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widjet />
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default App;
