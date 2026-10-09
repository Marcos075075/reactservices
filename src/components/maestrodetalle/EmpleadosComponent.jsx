import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class EmpleadosComponent extends Component {

  state = {
    empleados: []
  }

  cargarEmpleados = () => {
    let id = this.props.idDepartamento;
    let request = "api/empleados/empleadosdepartamento/" + id;

    axios.get(Global.urlApiEmpleados + request).then((respuesta) => {
      console.log("Leyendo empleados");
      this.setState({
        empleados: respuesta.data
      })

    })

  }

  componentDidMount = () => {
    this.cargarEmpleados();
  }

  componentDidUpdate = (oldProps) => {
    if (oldProps.idDepartamento != this.props.idDepartamento) {
      this.cargarEmpleados();

      console.log("Actual: " + this.props.idDepartamento);
      console.log("Viejo: " + oldProps.idDepartamento);
    }

  }

  render() {
    return (
      <div>
        <h1>Empleados component</h1>
        <h2>{this.state.texto}</h2>
        <ul>
          {
            this.state.empleados.map((emp, index) => {
              return (
                <li key={index}>
                  {emp.apellido}, Oficio: {emp.oficio}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
