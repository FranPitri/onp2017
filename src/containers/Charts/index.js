import React, {Component} from 'react'
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts'
import { connect } from 'react-redux'
import './styles.css'

class Charts extends Component {

    constructor() {
        super()
        this.state = {
            data: {
                temperature: [],
                water: [],
                lux: [],
            }
        }
    }

    componentDidMount(){
        this.setState({
            data: {
                temperature: this.props.temperature,
                water: this.props.water,
                lux: this.props.lux,
            }
        })
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

    render(){
        return (
            <div className={'Charts_wrapper'}>
                <div className={'Chart_box'}>
                    <LineChart width={600} height={250} data={this.state.data.temperature}
                               margin={{top:10, right: 20}}>
                        <XAxis dataKey="hora" hide/>
                        <YAxis hide/>
                        <Tooltip/>
                        <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="valor" stroke="#F44336" />
                    </LineChart>
                    <span className={'Chart_box__label'}>Temperatura del ambiente</span>
                </div>
                <div className={'Chart_box'}>
                    <LineChart width={600} height={250} data={this.state.data.water}
                               margin={{top:10, right: 20}}>
                        <XAxis dataKey="hora" hide/>
                        <YAxis hide/>
                        <Tooltip/>
                        <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="valor" stroke="#2196F3" />
                    </LineChart>
                    <span className={'Chart_box__label'}>Cantidad de agua total consumida</span>
                </div>
                <div className={'Chart_box'}>
                    <LineChart width={600} height={250} data={this.state.data.lux}
                               margin={{top:10, right: 20}}>
                        <XAxis dataKey="hora" hide/>
                        <YAxis hide/>
                        <Tooltip/>
                        <CartesianGrid stroke="#ddd" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="valor" stroke="#FFEB3B" />
                    </LineChart>
                    <span className={'Chart_box__label'}>Nivel lumínico del ambiente en el criadero</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    temperature: state.data.temperature,
    water: state.data.water,
    lux: state.data.lux,
})

export default connect(mapStateToProps)(Charts)