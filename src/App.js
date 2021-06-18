import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Section_1 from './components/Section_1/Section_1';
import Section_2 from './components/Section_2/Section_2';
import Section_3 from './components/Section_3/Section_3';
import Section_4 from './components/Section_4/Section_4';
import Section_5 from './components/Section_5/Section_5';
import Section_6 from './components/Section_6/Section_6';
import Section_7 from './components/Section_7/Section_7';
import Section_8 from './components/Section_8/Section_8';
import Section_9 from './components/Section_9/Section_9';
import Section_10 from './components/Section_10/Section_10';
import Section_11 from './components/Section_11/Section_11';
import Section_12 from './components/Section_12/Section_12';
import Section_13 from './components/Section_13/Section_13';
import Section_14 from './components/Section_14/Section_14';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import DashboardPage from './components/Pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route, withRouter, Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    window.addEventListener('load', function () {
      this.setTimeout(() => {
        setLoading(false)
      }, 2000)
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
      <Section_1></Section_1>
      <Section_2></Section_2>
      <Section_3></Section_3>
      <Section_4></Section_4>
      <Section_5></Section_5>
      <Section_6></Section_6>
      <Section_7></Section_7>
      <Section_8></Section_8>
      <Section_9></Section_9>
      <Section_10></Section_10>
      <Section_11></Section_11>
      <Section_12></Section_12>
      <Section_13></Section_13>
      <Section_14></Section_14>
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
