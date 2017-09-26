import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import 'react-table/react-table.css'
import './styles.css'

import Tabs from '../../components/Tabs'

class Manage extends Component {

    constructor() {
        super()
        this.state = {
            action : null
        }
    }

    render() {
        return (
            <div className={'Manage_wrapper'}>
                <Redirect from={this.props.match.url} exact to={`${this.props.match.url}/temperature`}/>
                <Tabs match={this.props.match}/>
                <div className={'Manage__action_box'}>
                    <select onChange={(e) => { this.setState({action: e.target.value})}}>
                        <option value={''}>----</option>
                        <option value={'reset'}>Reset data</option>
                    </select>
                    <div className={'Manage__action_button'}>Apply</div>
                </div>
            </div>
        )
    }
}

export default Manage
