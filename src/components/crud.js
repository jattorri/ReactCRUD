import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import ToggleButton from 'react-bootstrap/ToggleButton';

import 'bootstrap/dist/css/bootstrap.min.css'; 



const data = [
    {id: 1, nombre: 'Guitarra', precio: 2000, envioGratis: true},
    {id: 2, nombre: 'Bateria', precio: 4000, envioGratis: false},
]

class Crud extends React.Component{ 

    state={
        data: data,
        modalInsertar: false,
        form:{
            id:'',
            nombre:'',
            precio: null,
            envioGratis: false, 
        },
       
    };
    handleChange=e=>{
        console.log('handle change')
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };
    mostrarModal=()=>{
        this.setState({modalInsertar: true})
        console.log('mostrarModal')
        console.log(this.modalInsertar)
    };
    ocultarModal=()=>{
        this.setState({modalInsertar: false})
        console.log('ocultarrModal')
        console.log(this.modalInsertar)
    };
    insertar=()=>{
        var valorNuevo={...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista=this.state.data;
        lista.push(valorNuevo);
        this.setState({data: lista, modalInsertar: false})
    }
    render(){
      return (
          <>
          <Container>
              <br />
          <Button variant="success" onClick={()=>this.mostrarModal()}>Insertar nuevo instrumento</Button>
          <br /><br />
          <Table>
              <thead> 
              <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>EnvioGratis</th>
              <th>Editar</th>
              <th>Eliminar</th>
              </tr>
              </thead>
              <tbody>
                  {this.state.data.map((elemento)=>(
                  <tr key={elemento.id}>
                      <td>{elemento.id}</td>
                      <td>{elemento.nombre}</td>
                      <td>{elemento.precio}</td>
                      <td>{elemento.envioGratis}</td>
                      <td><Button>Editar</Button></td>
                      <td><Button variant="danger">Eliminar</Button></td>
                  </tr>
                  ))}
              </tbody>
          </Table> 
          </Container>

          <Modal show={this.state.modalInsertar}>
              <Modal.Header>
                  <div>
                      Insertar Registro
                  </div>
              </Modal.Header>
              <Modal.Body>
                  <Form.Group>
                      <label>instrumento</label>
                      <input className="form-control" name="nombre" type="text" onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group>
                      <label>precio</label>
                      <input className="form-control" name="precio" type="text" onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group>
                  <ToggleButton
                   type="checkbox"
                   variant="secondary"
                   checked={this.envioGratis}
                   value="1">
                   Checked
                  </ToggleButton> 
                  </Form.Group>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
              <Button variant="primary" onClick={()=>this.insertar()}>Crear</Button>
              <Button variant="danger" onClick={()=>this.ocultarModal()}>Cancelar</Button>
          </Modal>
          </>
        );  
    }}  
export default Crud;  