import AppRouter from "./components/AppRouter";
import Navbar from "./components/NavBar";
import {Layout} from "antd";
import './App.css'
import {useEffect} from "react";
import {IUser} from "./models/IUser";
import {useActions} from "./hook/useActions";



function App() {
    const {setUser, setIsAuth} = useActions();

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true);
        }
    }, [])
  return (
      <Layout>
          <Navbar/>
          <Layout.Content>
              <AppRouter/>
          </Layout.Content>

      </Layout>

  );
}

export default App;
