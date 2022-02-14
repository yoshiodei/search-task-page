import { getData } from './redux/actions/action';
import { useEffect } from 'react';
import Alert from "./components/Alert";
import Main from "./components/Main";
import {connect} from 'react-redux';
import Nav from "./components/Nav";

function App({getData, state}) {

    useEffect(() => {
        
        getData();
        
    }, []);


  return (
    <div className="App">
        <Nav />
        <Alert />
        <Main />
    </div>
  );
}

  const mapStateToProps = (state) => {
      return {
        state
      }
  }

  const mapDispatchToProps = { getData }

export default connect(mapStateToProps, mapDispatchToProps)(App);
