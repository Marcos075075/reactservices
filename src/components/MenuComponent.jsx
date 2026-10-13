import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuComponent extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/tabla/21">Tabla multiplicar 21</NavLink>
            </li>
            <li>
                <NavLink to="/tabla/58">Tabla multiplicar 58</NavLink>
            </li>
            <li>
                <NavLink to="/tabla/2">Tabla multiplicar 2</NavLink>
            </li>
            <li>
                <NavLink to="/collatz/5">Teoria de Collatz | Numero: 5</NavLink>
            </li>
            <li>
                <NavLink to="/collatz/15">Teoria de Collatz | Numero: 15</NavLink>
            </li>
        </ul>
      </div>
    )
  }
}
