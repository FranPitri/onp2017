import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { deleteData } from '../../actions/manageData'
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
                    <div className={'Manage__action_button'} onClick={() => {this.props.del(this.props.location.pathname.split('/').slice(-1)[0])}}>Apply</div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    del: bindActionCreators(deleteData, dispatch)
})

export default connect(() => ({}), mapDispatchToProps)(Manage)
