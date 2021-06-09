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
        modalEditar: false,
        form:{
            id:'',
            nombre:'',
            precio: null,
            envioGratis: true, 
        },
    };
    handleChange=e=>{
        console.log('handle change')
        console.log(this.state.form.envioGratis)
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };
    mostrarModal=()=>{
        this.setState({modalInsertar: true})
    };
    ocultarModal=()=>{
        this.setState({modalInsertar: false})
    };
    mostrarModalEditar=(elemento)=>{
        this.setState({modalEditar: true, form: elemento})
    };
    ocultarModalEditar=()=>{
        this.setState({modalEditar: false})
    };
    insertar=()=>{
        var valorNuevo={...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista=this.state.data;
        lista.push(valorNuevo);
        this.setState({data: lista, modalInsertar: false})
    };
    editar=(dato)=>{
        var contador=0;
        var lista=this.state.data;
        lista.map((elemento)=>{
            if(dato.id===elemento.id){
                lista[contador].nombre=dato.nombre
                lista[contador].nombre=dato.precio
                lista[contador].nombre=dato.envioGratis
            }
            contador++;
        });
        this.setState({data: lista, modalEditar: false})
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
                      <td>{elemento.envioGratis.toString()}</td>
                      <td><Button onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button></td>
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
                   checked={this.state.form.envioGratis}
                   value="1"
                   onChange={(e) => {
                    this.setState({ form: {envioGratis: !this.state.form.envioGratis} });
                    console.log('onChange')
                    console.log(this.state.form.envioGratis)
                   }}
                   >
                   Checked
                  </ToggleButton> 
                  </Form.Group>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
              <Button variant="primary" onClick={()=>this.insertar()}>Crear</Button>
              <Button variant="danger" onClick={()=>this.ocultarModal()}>Cancelar</Button>
          </Modal>

          <Modal show={this.state.modalEditar}>
              <Modal.Header>
                  <div>
                     <h3> Editar Registro</h3> 
                  </div>
              </Modal.Header>
              <Modal.Body>
                  <Form.Group>
                      <label>instrumento</label>
                      <input className="form-control" name="nombre" type="text" onChange={this.handleChange} value={this.state.form.nombre}/>
                  </Form.Group>
                  <Form.Group>
                      <label>precio</label>
                      <input className="form-control" name="precio" type="text" onChange={this.handleChange} value={this.state.form.precio}/>
                  </Form.Group>
                  <Form.Group>
                  <ToggleButton
                   type="checkbox"
                   variant="secondary"
                   checked={this.state.form.envioGratis}
                   value={this.state.form.envioGratis}
                   onChange={(e) => {
                    this.setState({ form: {envioGratis: !this.state.form.envioGratis} });
                    console.log('onChange')
                    console.log(this.state.form.envioGratis)
                   }}
                   >
                   Checked
                  </ToggleButton> 
                  </Form.Group>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
              <Button variant="primary" onClick={()=>this.editar(this.state.form)}>Editar</Button>
              <Button variant="danger" onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
          </Modal>
          </>
        );  
    }}  
export default Crud;  