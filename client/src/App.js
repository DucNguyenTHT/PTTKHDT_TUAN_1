import React  from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ChiTiet from './components/pages/ChiTiet'
import Add from './components/pages/Add'
import Edit from  './components/pages/Edit'
import ChuyenDe from './components/pages/ChuyenDe'
import ChuyenDeadd from './components/pages/ChuyenDeadd'
import ChuyenDeUpdate from './components/pages/ChuyenDeUpdate'
import TimChuyenDe from './components/pages/TimChuyenDe'
const App = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About} />
                <Route exact path='/special/:special' component={ChiTiet}/>
                <Route exact path='/special/:special/add' component={Add}/>
                <Route exact path='/special/:special/update/:id' component={Edit}/>
                <Route exact path='/chuyende' component={ChuyenDe}/>
                <Route exact path='/chuyende/add/:Major' component={ChuyenDeadd}/>
                <Route exact path='/chuyende/update/:id' component={ChuyenDeUpdate}/>
                <Route exact path='/timtheonganh' component={TimChuyenDe}/>
            </Switch>
        </Router>
    )
}

export default App
