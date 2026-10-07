import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class EmpleadosDepartamentos extends Component {
    
    selectIdDepartamento = React.createRef();
    urlEmpleados = Global.urlApiEmpleados;
    urlDepartamentos = Global.urlApiDepartamentos;

    buscarEmpleados = (e) => {
        e.preventDefault();
        
        let idDepartamento = this.selectIdDepartamento.current.value;
        let request = "api/empleados/empleadosdepartamento/" + idDepartamento;
        axios.get(this.urlEmpleados + request). then((response) => {
            console.log("leyendo empleados");
            this.setState({
                empleados: response.data
            })
            
        })
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

    componentDidMount = () => {
        this.cargarDepartamentos();
    }

    state = {
        empleados: [],
        departamentos: []
    }

    render() {
        return (
        <div>
            <h1>Api Empleados Departamentos</h1>
            <form>
                <label>Introduzca el Id del departamento: </label>
                <select ref={this.selectIdDepartamento}>
                    {
                        this.state.departamentos.map((dept, index) => {
                            return(
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
            <ul>
                {
                    this.state.empleados.map((emp, index) => {
                        return(
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
