import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    MdWhatshot,
    MdBubbleChart,
    MdWbSunny
} from 'react-icons/lib/md'
import './styles.css'

const Tabs = ({match}) => (
    <div className={'Tabs_wrapper'}>
        <ul className={'Tabs_list'}>
            <li className={'Tabs_list__item'}>
                <NavLink className={'Tabs_list__item__link'} to={`${match.url}/temperature`} activeClassName={'Tabs_list__item__link_active_temp'}><MdWhatshot/></NavLink>
            </li>
            <li className={'Tabs_list__item'}>
                <NavLink className={'Tabs_list__item__link'} to={`${match.url}/water`} activeClassName={'Tabs_list__item__link_active_water'}><MdBubbleChart/></NavLink>
            </li>
            <li className={'Tabs_list__item'}>
                <NavLink className={'Tabs_list__item__link'} to={`${match.url}/lux`} activeClassName={'Tabs_list__item__link_active_lux'}><MdWbSunny/></NavLink>
            </li>
        </ul>
    </div>
)

export default Tabs