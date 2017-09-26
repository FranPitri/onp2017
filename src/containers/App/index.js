import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './styles.css'

import Nav from '../../components/Nav'
import Charts from '../Charts'
import Reports from '../Reports'
import Manage from '../Manage'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Redirect from={'/'} exact to={'/charts'}/>
                <Route path={'/'} component={Nav}/>
                <Switch>
                    <Route path={'/charts'} component={Charts}/>
                    <Route path={'/reports'} component={Reports}/>
                    <Route path={'/manage'} component={Manage}/>
                </Switch>
            </div>
        )
    }
}

export default App
