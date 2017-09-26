import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import moment from 'moment'
import 'react-table/react-table.css'
import './styles.css'

import Tabs from '../../components/Tabs'

class Reports extends Component {

    constructor() {
        super()
        this.state = {
            data: {
                temperature : [],
                water: [],
                lux: []
            },
            columns: [
                {Header: 'Fecha', accessor: 'fecha'},
                {Header: 'Hora', accessor: 'hora'},
                {Header: 'Valor', accessor: 'valor'},
                {Header: 'Unidad', accessor: 'unidad'},
                {Header: 'Estado', accessor: 'estado'},
                {Header: 'Criadero', accessor: 'criadero'},
            ]
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: {
                temperature: props.temperature,
                water: props.water,
                lux: props.lux,
            }
        })
    }

    render() {
        return (
            <div className={'Reports_wrapper'}>
                <Redirect from={this.props.match.url} exact to={`${this.props.match.url}/temperature`}/>
                <Tabs match={this.props.match}/>
                <Switch>
                    <Route path={`${this.props.match.url}/temperature`} render={() => (
                        <ReactTable
                            data={this.state.data.temperature}
                            columns={this.state.columns}
                            defaultPageSize={20}
                            className={'Table -striped -highlight'}
                        />
                    )} />
                    <Route path={`${this.props.match.url}/water`} render={() => (
                        <ReactTable
                            data={this.state.data.water}
                            columns={this.state.columns}
                            defaultPageSize={20}
                            className={'Table -striped -highlight'}
                        />
                    )} />
                    <Route path={`${this.props.match.url}/lux`} render={() => (
                        <ReactTable
                            data={this.state.data.lux}
                            columns={this.state.columns}
                            defaultPageSize={20}
                            className={'Table -striped -highlight'}
                        />
                    )} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    temperature: state.data.temperature,
    water: state.data.water,
    lux: state.data.lux,
})

export default connect(mapStateToProps)(Reports)
