import React, {useState, useEffect} from 'react';
import api from './api';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const lista = [
    {id: 1, name: 'Estudar', done: false},
    {id: 2, name: 'Comer', done: false},
    {id: 3, name: 'Dormir', done: true}
]

function App() {

    const[lista, setLista] = useState([]); //imutabilidade
    const[loading, setLoading] = useState(true);

    useEffect(() => { //construtor, executado "uma única vez"
        api.get('/livros').then((response) => {
            const itens = response.data;
            setLista(itens);
            setLoading(false);
        })
    }, [])

  return(
    <>
      {loading ? <span>Carregando dados...</span>: <div/>}
      <Table>
          {lista.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.autor}</TableCell>
              <TableCell>{item.titulo}</TableCell>
              <TableCell><input type="checkbox" checked={item.lido}/></TableCell>
          </TableRow> 
          ))}     
      </Table>
      <Link to="/create">Adicionar</Link>
    </>
  )
}

export default App;
