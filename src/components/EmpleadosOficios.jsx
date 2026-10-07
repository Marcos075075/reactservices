import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class EmpleadosOficios extends Component {

    selectOficio = React.createRef();
    urlEmpleados = Global.urlApiEmpleados;

    cargarOficios = () => {
        let request = "api/Empleados";
        let aux = [];
        axios.get(this.urlEmpleados + request).then((respuesta) => {
            console.log("Leyendo empleados");

            for (let empleados of respuesta.data) {

                if (!aux.includes(empleados.oficio)) {
                    aux.push(empleados.oficio)
                }
            }
            this.setState({
                oficio: aux
            })

        })
    }

    mostrarDatos = (e) => {
        e.preventDefault();

        let oficios = this.selectOficio.current.value;
        let request = "api/Empleados/EmpleadosOficio/" + oficios;

        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Leyendo datos");
            this.setState({
                datosEmp: response.data
            })

        })
    }

    componentDidMount = () => {
        this.cargarOficios();
    }

    state = {
        oficio: [],
        datosEmp: []
    }

    render() {
        return (
            <div>
                <h1>Empleados Oficios</h1>
                <form >
                    <label>Seleccione oficio</label>
                    <select ref={this.selectOficio}>
                        {
                            this.state.oficio.map((ofi, index) => {
                                return (
                                    <option key={index} value={ofi}>{ofi}</option>
                                )
                            })
                        }
                    </select>
                    <button onClick={this.mostrarDatos}>Buscar empleados</button>
                </form>

                {
                    this.state.datosEmp.length > 0 &&
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Apellido</th>
                                <th>Oficio</th>
                                <th>Salario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.datosEmp.map((dat, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{dat.apellido}</td>
                                            <td>{dat.oficio}</td>
                                            <td>{dat.salario}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }

            </div>
        )
    }
}
