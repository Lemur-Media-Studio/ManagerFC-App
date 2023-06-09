import React, { useEffect, useState } from "react";
import {
  Button, Container, Grid, IconButton, Tooltip,
} from "@mui/material";

// Tables imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";
import "./SquadPlayer.css";
import Loading from "../../Components/Spinner/Spinner";
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import "./SquadField.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function calculateAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}

function u23(dateString) {
  var birthday = +new Date(dateString);
  const edad = ((Date.now() - birthday) / (31557600000))
  if(edad <= 23){
      const img = "https://i.ibb.co/rs86WWC/u23-Manager-App.png"
      return(img)
  }
}

// List only POR players function
const RecordPOR = (props) => (
  <TableBody>

    <TableRow

    >
      <TableCell component="th" scope="row" sx={{ color: 'white', textAlign:'center' }} as={Link} className='player-name-table' to={`/detail/${props.record._id}`}>
        {props.record.name + " " + props.record.surname}
      </TableCell>

      <TableCell >
        <div className="player-list-icons-container">
            {u23(props.record.fn) && <Tooltip title="Sub 23"><img height="20" src={u23(props.record.fn)} alt="Icono de jugador menor de 23 años"></img></Tooltip>}
        </div>
      </TableCell>

      <TableCell sx={{ color: 'white', textAlign:'center' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
      <TableCell sx={{ color: 'white', textAlign:'center' }}>{calculateAge(props.record.fn)}</TableCell>
      <TableCell sx={{ color: 'white', textAlign:'center' }}><img src={props.record.na0} alt="Nacionalidad"></img></TableCell>
      <TableCell align="left">
        <div className="player-list-icons-edit-container">
            <Tooltip title="Editar">
                <IconButton as={Link} to={`/edit/${props.record._id}`}
                >
                    <EditIcon sx={{mt:1, color:"#9b0181 !important"}} />
                </IconButton>
            </Tooltip>

            <Tooltip title="Eliminar">
                <IconButton onClick={() => {props.deleteRecord(props.record._id + props.record.name + props.record.surname);}}
                >
                    <DeleteIcon sx={{color:"#9b0181 !important"}} />
                </IconButton>
            </Tooltip>
        </div>
        </TableCell>
    </TableRow>

  </TableBody>
);

// List only DEF players function
const RecordDEF = (props) => (
  <TableBody>

    <TableRow

    >
      <TableCell component="th" scope="row" sx={{ color: 'white', textAlign:'center' }} as={Link} className='player-name-table' to={`/detail/${props.record._id}`}>
        {props.record.name + " " + props.record.surname}
      </TableCell>

      <TableCell >
        <div className="player-list-icons-container">
            {u23(props.record.fn) && <Tooltip title="Sub 23"><img height="20" src={u23(props.record.fn)} alt="Icono de jugador menor de 23 años"></img></Tooltip>}
        </div>
      </TableCell>

      <TableCell sx={{ color: 'white', textAlign:'center' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
      <TableCell sx={{ color: 'white', textAlign:'center' }}>{calculateAge(props.record.fn)}</TableCell>
      <TableCell sx={{ color: 'white', textAlign:'center' }}><img src={props.record.na0} alt="Nacionalidad"></img></TableCell>
      <TableCell align="left">
        <div className="player-list-icons-edit-container">
            <Tooltip title="Editar">
                <IconButton as={Link} to={`/edit/${props.record._id}`}
                >
                    <EditIcon sx={{mt:1, color:"#9b0181 !important"}} />
                </IconButton>
            </Tooltip>

            <Tooltip title="Eliminar">
                <IconButton onClick={() => {props.deleteRecord(props.record._id + props.record.name + props.record.surname);}}
                >
                    <DeleteIcon sx={{color:"#9b0181 !important"}} />
                </IconButton>
            </Tooltip>
        </div>
        </TableCell>
    </TableRow>

  </TableBody>
);

// List only MED players function
const RecordMED = (props) => (
  <TableBody>

    <TableRow

    >
      <TableCell component="th" scope="row" sx={{ color: 'white', textAlign:'center' }} as={Link} className='player-name-table' to={`/detail/${props.record._id}`}>
        {props.record.name + " " + props.record.surname}
      </TableCell>

      <TableCell >
        <div className="player-list-icons-container">
            {u23(props.record.fn) && <Tooltip title="Sub 23"><img height="20" src={u23(props.record.fn)} alt="Icono de jugador menor de 23 años"></img></Tooltip>}
        </div>
      </TableCell>

      <TableCell sx={{ color: 'white', textAlign:'center' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
      <TableCell sx={{ color: 'white', textAlign:'center' }}>{calculateAge(props.record.fn)}</TableCell>
      <TableCell sx={{ color: 'white', textAlign:'center' }}><img src={props.record.na0} alt="Nacionalidad"></img></TableCell>
      <TableCell align="left">
        <div className="player-list-icons-edit-container">
            <Tooltip title="Editar">
                <IconButton as={Link} to={`/edit/${props.record._id}`}
                >
                    <EditIcon sx={{mt:1, color:"#9b0181 !important"}} />
                </IconButton>
            </Tooltip>

            <Tooltip title="Eliminar">
                <IconButton onClick={() => {props.deleteRecord(props.record._id + props.record.name + props.record.surname);}}
                >
                    <DeleteIcon sx={{color:"#9b0181 !important"}} />
                </IconButton>
            </Tooltip>
        </div>
        </TableCell>
    </TableRow>

  </TableBody>
);

// List only DEL players function
const RecordDEL = (props) => (
  <TableBody>

    <TableRow

    >
      <TableCell component="th" scope="row" sx={{ color: 'white', textAlign:'center' }} as={Link} className='player-name-table' to={`/detail/${props.record._id}`}>
        {props.record.name + " " + props.record.surname}
      </TableCell>

      <TableCell >
        <div className="player-list-icons-container">
            {u23(props.record.fn) && <Tooltip title="Sub 23"><img height="20" src={u23(props.record.fn)} alt="Icono de jugador menor de 23 años"></img></Tooltip>}
        </div>
      </TableCell>

      <TableCell sx={{ color: 'white', textAlign:'center' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
      <TableCell sx={{ color: 'white', textAlign:'center' }} value={calculateAge(props.record.fn)}>{calculateAge(props.record.fn)}</TableCell>
      <TableCell sx={{ color: 'white', textAlign:'center' }}><img src={props.record.na0} alt="Nacionalidad"></img></TableCell>
      <TableCell align="left">
        <div className="player-list-icons-edit-container">
            <Tooltip title="Editar">
                <IconButton as={Link} to={`/edit/${props.record._id}`}
                >
                    <EditIcon sx={{mt:1, color:"#9b0181 !important"}} />
                </IconButton>
            </Tooltip>

            <Tooltip title="Eliminar">
                <IconButton onClick={() => {props.deleteRecord(props.record._id + props.record.name + props.record.surname);}}
                >
                    <DeleteIcon sx={{color:"#9b0181 !important"}} />
                </IconButton>
            </Tooltip>
        </div>
        </TableCell>
    </TableRow>

  </TableBody>
);

export default function SquadField() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState('');



  // This method fetches the player data from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://lemurpromanagement-mdg.app/record/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
      setIsLoading(false)
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a player
  async function deleteRecord(id, name, surname) {
    if (window.confirm('¿Esta seguro que desea eliminar el jugador ' + name + ' ' + surname + ' ?')) {
      await fetch(`https://lemurpromanagement-mdg.app/${id}`, {
        method: "DELETE",
      });

      const newRecords = records.filter((el) => el._id !== id);
      setRecords(newRecords);

    }




  }


  // map data id & pn = POR
  function recordListPOR() {
    return results.map((record) => {
      if (record.pn === "POR") {
        //console.log(record)
        return (
          <RecordPOR
            record={record}
            deleteRecord={() => deleteRecord(record._id, record.name, record.surname)}
            key={record._id}
          />
        );
      }
    });
  }

  // map data id & pn = DC-LD-LI-CRD-CRI
  function recordListDEF() {
    return results.map((record) => {
      if (record.pn === "DC" || record.pn === "LD" || record.pn === "LI" || record.pn === "CRD" || record.pn === "CRI") {
        //console.log(record)
        return (
          <RecordDEF
            record={record}
            deleteRecord={() => deleteRecord(record._id, record.name, record.surname)}
            key={record._id}
          />
        );
      }
    });
  }

  // map data id & pn = PIV DEF-MC-MP
  function recordListMED() {
    return results.map((record) => {
      if (record.pn === "PIV DEF" || record.pn === "MC" || record.pn === "MP") {
        //console.log(record)
        return (
          <RecordMED
            record={record}
            deleteRecord={() => deleteRecord(record._id, record.name, record.surname)}
            key={record._id}
          />
        );
      }
    });
  }

  // map data id & pn = DEL
  function recordListDEL() {
    return results.map((record) => {
      if (record.pn === "DEL" || record.pn === "EXI" || record.pn === "EXD") {
        //console.log(record)
        return (
          <RecordDEL
            record={record}
            deleteRecord={() => deleteRecord(record._id, record.name, record.surname)}
            key={record._id}
          />
        );
      }
    });
  }
  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value)
    //console.log(e.target.value)

  }


  //metodo de filtrado 1 
  let results = []
  if (!search) {
    results = records
  } else {
    results = records.filter((dato) => dato.surname.toLowerCase().includes(search.toLocaleLowerCase())
    || dato.pn.toLowerCase().includes(search.toLocaleLowerCase())
    || dato.ps.toLowerCase().includes(search.toLocaleLowerCase()))

    if (search === "CRI" || search === "CRD" || search === "PIV DEF" || search === "MC" ||
      search === "MP" || search === "DEL" || search === "POR" || search === "DC" || search === "LD" || search === "LI") {
      results = records.filter((dato) => dato.pn.toLowerCase().includes(search.toLocaleLowerCase()) || dato.ps.toLowerCase().includes(search.toLocaleLowerCase()))
    }

    //Filtro centrales por posición y perfil hábil
    if (search === "dcdiestra") {
      results = records.filter((dato) => (dato.pn==="DC" && (dato.ph === "Ambos perfiles" || dato.ph==="Diestra")))
    }
    if (search === "dczurda") {
      results = records.filter((dato) => (dato.pn==="DC" && (dato.ph === "Ambos perfiles" || dato.ph==="Zurda")))
    }

    //Filtro jugadores sub 23
    if(search === "u23"){
      results = records.filter((dato) => (dato.fn.startsWith("2001") || dato.fn.startsWith("2002") || dato.fn.startsWith("2003") || dato.fn.startsWith("2004") || dato.fn.startsWith("2005") || dato.fn.startsWith("2006")))
    }
  }

  // This following section will display the table with the records of individuals.
  return (
    <>

      <h1 className="page-title">PLANTILLA</h1>
      <Container>
        <Grid container>

          <Grid xs={5.6}>

            <Box
              sx={{
                width: 520,
                height: 670,
                backgroundImage: 'url(https://sharemytactics.com/images/pitch.png)',
                display: { xs: 'none !important', md: 'flex !important' }
              }}
              className="field-img"
            >
                            <Button sx={{ width: 60, height: 50, top: "10px", left: "630px" }} color="secondary" variant="contained" value="" onClick={searcher}>Todos</Button>
                            <Button sx={{ width: 60, height: 50, top: "60px", left: "350px" }} color="secondary" variant="contained" value="POR" onClick={searcher}>POR</Button>
                            <Button sx={{ width: 60, height: 50, top: "150px", left: "230px" }} color="primary" variant="contained" value="dcdiestra" onClick={searcher}>DC</Button>
                            <Button sx={{ width: 60, height: 50, top: "150px", left: "280px" }} color="primary" variant="contained" value="dczurda" onClick={searcher}>DC</Button>
                            <Button sx={{ width: 60, height: 50, top: "190px", left: "10px" }} color="primary" variant="contained" value="LD" onClick={searcher}>LD</Button>
                            <Button sx={{ width: 60, height: 50, top: "190px", left: "240px" }} color="primary" variant="contained" value="LI" onClick={searcher}>LI</Button>
                            <Button sx={{ width: 60, height: 50, top: "270px", right: "120px" }} color="primary" variant="contained" value="CRD" onClick={searcher}>CRD</Button>
                            <Button sx={{ width: 60, height: 50, top: "270px", left: "112px" }} color="primary" variant="contained" value="CRI" onClick={searcher}>CRI</Button>
                            <Button sx={{ width: 60, height: 50, top: "270px", right: "100px" }} color="primary" variant="contained" value="PIV DEF" onClick={searcher}>PIV DEF</Button>
                            <Button sx={{ width: 60, height: 50, top: "344px", right: "165px" }} color="primary" variant="contained" value="MC" onClick={searcher}>MC</Button>
                            <Button sx={{ width: 60, height: 50, top: "420px", right: "230px" }} color="primary" variant="contained" value="MP" onClick={searcher}>MP</Button>
                            <Button sx={{ width: 60, height: 50, top: "450px", right: "440px" }} color="primary" variant="contained" value="EXD" onClick={searcher}>EXD</Button>
                            <Button sx={{ width: 60, height: 50, top: "450px", right: "210px" }} color="primary" variant="contained" value="EXI" onClick={searcher}>EXI</Button>
                            <Button sx={{ width: 60, height: 50, top: "520px", right: "420px" }} color="primary" variant="contained" value="DEL" onClick={searcher}>DEL</Button>

            </Box>



          </Grid>

          <Grid xs={12} md={6.4}>
            <Loading loading={isLoading}>

            <div className="buscar" >
                <Input className="input-filter-table" placeholder="Apellido" onChange={searcher}></Input>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <Button sx={{ml:3, backgroundColor: "#9b0181 !important", color:"#fff"}} value="u23" onClick={searcher}>
                    Sub 23
                </Button>
            </div>

              <TableContainer sx={{ maxHeight: 670, maxWidth: 700, display: { xs: 'flex', md: 'block' }, justifyContent: {xs: 'center !important'} }}>
                <Table sx={{ maxWidth: 800 }} aria-label="simple table" className="table-players">
                  <TableHead>
                    <TableRow >
                      <TableCell sx={{ color: '#fff' }} align="center">NOMBRE</TableCell>
                      <TableCell sx={{ color: '#fff' }}></TableCell>
                      <TableCell sx={{ color: '#fff' }} align="center">POS</TableCell>
                      <TableCell sx={{ color: '#fff' }} align="center">EDAD</TableCell>
                      <TableCell sx={{ color: '#fff' }} align="center">NAC</TableCell>
                      <TableCell sx={{ color: '#fff' }} align="center">EDICIÓN</TableCell>
                    </TableRow>
                  </TableHead>

                  {recordListPOR()}
                  {recordListDEF()}
                  {recordListMED()}
                  {recordListDEL()}

                </Table>
              </TableContainer>
            </Loading>
          </Grid>
        </Grid>
      </Container>

    </>
  );
}