import React, {Component} from 'react'
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts'
import './styles.css'
import moment from 'moment'

class Charts extends Component {

    constructor() {
        super()
        this.state = {
            data : []
        }
    }

    render(){
        return (
            <div className={'Charts_wrapper'}>
                <div className={'Chart_box'}>
                    <LineChart width={600} height={250} data={this.state.data}
                               margin={{top:10, right: 20}}>
                        <XAxis dataKey="time" hide/>
                        <YAxis hide/>
                        <Tooltip/>
                        <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="temperature" stroke="#F44336" />
                    </LineChart>
                    <span className={'Chart_box__label'}>Temperatura del ambiente</span>
                </div>
                <div className={'Chart_box'}>
                    <LineChart width={600} height={250} data={this.state.data}
                               margin={{top:10, right: 20}}>
                        <XAxis dataKey="time" hide/>
                        <YAxis hide/>
                        <Tooltip/>
                        <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="humidity" stroke="#2196F3" />
                    </LineChart>
                    <span className={'Chart_box__label'}>Cantidad de agua total consumida</span>
                </div>
                <div className={'Chart_box'}>
                    <LineChart width={600} height={250} data={this.state.data}
                               margin={{top:10, right: 20}}>
                        <XAxis dataKey="time" hide/>
                        <YAxis hide/>
                        <Tooltip/>
                        <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="humidity" stroke="#2196F3" />
                    </LineChart>
                    <span className={'Chart_box__label'}>Nivel lumínico del ambiente en el criadero</span>
                </div>
            </div>
        )
    }
}

export default Charts