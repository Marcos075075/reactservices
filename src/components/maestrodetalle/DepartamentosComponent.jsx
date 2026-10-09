import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import EmpleadosComponent from './EmpleadosComponent';

export default class DepartamentosComponent extends Component {

  selectIdDepartamento = React.createRef();
  urlDepartamentos = Global.urlApiDepartamentos;

  state = {
    departamentos: [],
    idDepartamento: 0
  }

  cargarDepartamentos = () => {
    let request = "webresources/departamentos"
    axios.get(this.urlDepartamentos + request).then((response) => {
      console.log("Leyendo Departamentos");
      this.setState({
        departamentos: response.data
      })
    })
  }

  buscarEmpleados = (e) => {
    e.preventDefault();
    let id = this.selectIdDepartamento.current.value;
    this.setState({
      idDepartamento: id
    })
  }

  componentDidMount = () => {
    this.cargarDepartamentos();
  }

  render() {
    return (
      <div>
        <h1> Departamentos Component</h1>
        <form>
          <label>Introduzca el Id del departamento: </label>
          <select ref={this.selectIdDepartamento}>
            {
              this.state.departamentos.map((dept, index) => {
                return (
                  <option key={index} value={dept.numero}>
                    {dept.nombre}
                  </option>
                )
              })
            }
          </select>
          <button onClick={this.buscarEmpleados}>
            Buscar Empleados
          </button>
        </form>
        {
          this.state.idDepartamento != 0 &&
          (<EmpleadosComponent idDepartamento = {this.state.idDepartamento}/>)
        }
      
      </div>
    )
  }
}
