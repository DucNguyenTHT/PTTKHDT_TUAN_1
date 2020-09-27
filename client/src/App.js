import React  from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ChiTiet from './components/pages/ChiTiet'
import Add from './components/pages/Add'
import Edit from  './components/pages/Edit'
const App = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About} />
                <Route exact path='/:special' component={ChiTiet}/>
                <Route exact path='/:special/add' component={Add}/>
                <Route exact path='/:special/update/:id' component={Edit}/>
            </Switch>
        </Router>
    )
}

export default App
