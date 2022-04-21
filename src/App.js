import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Departments from './Containers/Departments/Departments';
import Doctors from './Containers/Doctors/Doctors';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import MakeAnAppointment from './Containers/MakeAnAppointment/MakeAnAppointment';
import LoginSignUp from './Containers/LoginSignUp/LoginSignUp';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/Departments"} component={Departments} />
        <Route path={"/Doctors"} component={Doctors} />
        <Route path={"/About"} component={About} />
        <Route path={"/Contact"} component={Contact} />
        <Route path={"/MakeAnAppointment"} component={MakeAnAppointment} />
        <Route path={"/LoginSignUp"} component={LoginSignUp} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
