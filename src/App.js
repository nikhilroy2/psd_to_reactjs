//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Section1 from './components/Section_1/Section_1';
import Section2 from './components/Section_2/Section_2';
import Section3 from './components/Section_3/Section_3';
import Section4 from './components/Section_4/Section_4';
import Section5 from './components/Section_5/Section_5';
import Section6 from './components/Section_6/Section_6';
import Section7 from './components/Section_7/Section_7';
import Section8 from './components/Section_8/Section_8';
import Section9 from './components/Section_9/Section_9';
import Section10 from './components/Section_10/Section_10';
import Section11 from './components/Section_11/Section_11';
import Section12 from './components/Section_12/Section_12';
import Section13 from './components/Section_13/Section_13';
import Section14 from './components/Section_14/Section_14';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import DashboardPage from './components/Pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    window.addEventListener('load', function () {
      this.setTimeout(() => {
        setLoading(false);
      }, 1000)
    })
  })
  return (
    <Router>
      <div className="App">
        {loading ? <Loader></Loader> : ''}
        <div className={loading ? 'd-none' : ''}>
          <Header></Header>
          <menu className="m-0 p-0">
            <Switch>
              <Route exact path="/" component={Home}>
              </Route>
              <Route exact path="/dashboard" component={Dashboard}>
              </Route>
            </Switch>
          </menu>
          <Footer></Footer>
        </div>
        {/* <Header></Header>
       */}
      </div>
    </Router>
  );
}
const Home = () => {
  return (
    <>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      <Section8></Section8>
      <Section9></Section9>
      <Section10></Section10>
      <Section11></Section11>
      <Section12></Section12>
      <Section13></Section13>
      <Section14></Section14>
    </>
  )
}
const Dashboard = () => {
  return (
    <>
      <DashboardPage></DashboardPage>
    </>
  )
}

export default App;
