import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    MdShowChart,
    MdAssignment,
    MdModeEdit
} from 'react-icons/lib/md'
import './styles.css'

const Nav = ({match}) => (
    <div className={'Nav_wrapper'}>
        <ul className={'Nav_list'}>
            <li className={'Nav_list__item'}>
                <NavLink className={'Nav_list__item__link'} to={'/charts'} activeClassName={'Nav_list__item__link_active'}><MdShowChart/></NavLink>
            </li>
            <li className={'Nav_list__item'}>
                <NavLink className={'Nav_list__item__link'} to={'/reports'} activeClassName={'Nav_list__item__link_active'}><MdAssignment/></NavLink>
            </li>
            <li className={'Nav_list__item'}>
                <NavLink className={'Nav_list__item__link'} to={'/manage'} activeClassName={'Nav_list__item__link_active'}><MdModeEdit/></NavLink>
            </li>
        </ul>
    </div>
)

export default Nav