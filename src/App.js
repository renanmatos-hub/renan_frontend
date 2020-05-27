import React, {useState, useEffect} from 'react';
import api from './api';
import {Link} from 'react-router-dom';

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
      <table>
          {lista.map(item => (
            <tr key={item.id}>
              <td>{item.autor}</td>
              <td>{item.titulo}</td>
              <td><input type="checkbox" checked={item.lido}/></td>
          </tr> 
          ))}     
      </table>
      <Link to="/create">Adicionar</Link>
    </>
  )
}

export default App;
