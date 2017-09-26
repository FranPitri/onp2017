import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { fetchTemperature, fetchWater, fetchLux } from '../../actions/dataFetch'
import { withRouter } from 'react-router'
import './styles.css'

import Nav from '../../components/Nav'
import Charts from '../Charts'
import Reports from '../Reports'
import Manage from '../Manage'

class App extends Component {

    componentWillMount() {
        this.props.fetchTemperature()
        this.props.fetchWater()
        this.props.fetchLux()
    }

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

const mapDispatchToProps = (dispatch) => ({
    fetchTemperature: bindActionCreators(fetchTemperature, dispatch),
    fetchWater: bindActionCreators(fetchWater, dispatch),
    fetchLux: bindActionCreators(fetchLux, dispatch)
})

export default withRouter(connect(() => ({}), mapDispatchToProps)(App))
