import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles.css'

import Nav from '../../components/Nav'
import Charts from '../Charts'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path={'/'} component={Nav}/>
                <Switch>
                    <Route path={'/charts'} component={Charts}/>
                </Switch>
            </div>
        )
    }
}

export default App
