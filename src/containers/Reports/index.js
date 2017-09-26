import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
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
                temperature : [
                    {
                        date: moment().format('DD-MM-YYYY'),
                        time: moment().format('hh:mm:ss'),
                        value: 1,
                        unit: 'C',
                        status: 'activo',
                        criadero: 'Los Pollos Hermanos'
                    },
                ],
                water: [
                    {
                        date: moment().format('DD-MM-YYYY'),
                        time: moment().format('hh:mm:ss'),
                        value: 20,
                        unit: 'ml',
                        status: 'activo',
                        criadero: 'Los Pollos Hermanos'
                    },
                ],
                lux: [
                    {
                        date: moment().format('DD-MM-YYYY'),
                        time: moment().format('hh:mm:ss'),
                        value: 250,
                        unit: 'lux',
                        status: 'activo',
                        criadero: 'Los Pollos Hermanos'
                    },
                ]
            },
            columns: [
                {Header: 'Fecha', accessor: 'date'},
                {Header: 'Hora', accessor: 'time'},
                {Header: 'Valor', accessor: 'value'},
                {Header: 'Unidad', accessor: 'unit'},
                {Header: 'Estado', accessor: 'status'},
                {Header: 'Criadero', accessor: 'criadero'},
            ]
        }
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

export default Reports
