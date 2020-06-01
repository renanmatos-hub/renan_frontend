import React, {useState, useEffect} from 'react';
import api from './api';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



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
    
    const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const classes = useStyles();

  return(
    <>
    <div className={classes.root}>
    <AppBar position="static">
        <Toolbar>
           <IconButton edge="start" className={classes.menuButton}  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}  color="#128cff">
            Tela Inicial
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
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
      <Button color="inherit"><Link to="/create">Adicionar</Link></Button>
      
    </>
  )
}

export default App;
