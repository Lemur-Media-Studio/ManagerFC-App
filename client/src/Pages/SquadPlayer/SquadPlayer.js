import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

// Tables imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import "./SquadPlayer.css";
import { Padding } from "@mui/icons-material";

// List players function
const Record = (props) => (
  <>
    {/*  <Grid
     container
     marginTop="50px"
     display="flex"
     wrap="wrap"
     justifyContent="center"
   >
     <Card
       sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
       className="squad-players-card"
     >
       <CardContent className="squad-players-card">
         <Typography gutterBottom variant="h5" component="div">
           {props.record.name + " " + props.record.surname}
         </Typography>
         <Typography variant="body2" color="#fff">
           <img src={props.record.na0} alt="Nacionalidad"></img>
         </Typography>
         <Typography variant="body2" color="#fff">
           {props.record.age0}
         </Typography>
         <Typography variant="body2" color="#fff">
           {props.record.pn + " - " + props.record.ps}
         </Typography>
       </CardContent>
       <CardActions className="squad-players-card-actions"></CardActions>
     </Card>
   </Grid >*/}

    <TableBody>

      <TableRow

      >
        <TableCell component="th" scope="row" sx={{ color: 'white' }} as={Link} to={`/detail/${props.record._id}`}>
          {props.record.name + " " + props.record.surname}

        </TableCell>
        <TableCell align="left">
          <Button

            as={Link}
            to={`/edit/${props.record._id}`}


          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg>
          </Button>
        </TableCell>
        <TableCell align="center" sx={{ color: 'white' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
        <TableCell align="center" sx={{ color: 'white' }}>{props.record.age0}</TableCell>
        <TableCell align="center" sx={{ color: 'white' }}><img src={props.record.na0} alt="Nacionalidad"></img></TableCell>
        <TableCell align="center">


          <Button


            onClick={() => {
              props.deleteRecord(props.record._id);
            }}

          >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-earmark-x-fill" viewBox="0 0 16 16">
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.854 7.146 8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 1 1 .708-.708z" />
            </svg>
          </Button>

        </TableCell>
      </TableRow>

    </TableBody></>
);

// List only POR players function
const RecordPOR = (props) => (
  <Card
    sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
    className="squad-players-card"
  >

    <CardContent className="squad-players-card">
      <Typography gutterBottom variant="h5" component="div">
        {props.record.name + " " + props.record.surname}
      </Typography>
      <Typography variant="body2" color="#fff">
        <img src={props.record.na0} alt="Nacionalidad"></img>
      </Typography>
      <Typography variant="body2" color="#fff">
        {props.record.age0}
      </Typography>
      <Typography variant="body2" color="#fff">
        {props.record.pn + " - " + props.record.ps}
      </Typography>
    </CardContent>
    <CardActions className="squad-players-card-actions">
      <Button
        as={Link}
        to={`/detail/${props.record._id}`}
        className="btn-squad-players"
        size="small"
      >
        Detalles
      </Button>
      <Button
        as={Link}
        to={`/edit/${props.record._id}`}
        className="btn-squad-players"
        size="small"
      >
        Editar
      </Button>
    </CardActions>
    <Button
      className="btn-squad-players"
      onClick={() => {
        props.deleteRecord(props.record._id);
      }}
      size="small"
    >
      Delete
    </Button>
  </Card>
);

// List only POR players function
const RecordDEF = (props) => (
  <Card
    sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
    className="squad-players-card"
  >

    <CardContent className="squad-players-card">
      <Typography gutterBottom variant="h5" component="div">
        {props.record.name + " " + props.record.surname}
      </Typography>
      <Typography variant="body2" color="#fff">
        <img src={props.record.na0} alt="Nacionalidad"></img>
      </Typography>
      <Typography variant="body2" color="#fff">
        {props.record.age0}
      </Typography>
      <Typography variant="body2" color="#fff">
        {props.record.pn + " - " + props.record.ps}
      </Typography>
    </CardContent>
    <CardActions className="squad-players-card-actions">
      <Button
        as={Link}
        to={`/detail/${props.record._id}`}
        className="btn-squad-players"
        size="small"
      >
        Detalles
      </Button>
      <Button
        as={Link}
        to={`/edit/${props.record._id}`}
        className="btn-squad-players"
        size="small"
      >
        Editar
      </Button>
    </CardActions>
    <Button
      className="btn-squad-players"
      onClick={() => {
        props.deleteRecord(props.record._id);
      }}
      size="small"
    >
      Delete
    </Button>
  </Card>
);

// List only MED players function
const RecordMED = (props) => (
  <Card
    sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
    className="squad-players-card"
  >

    <CardContent className="squad-players-card">
      <Typography gutterBottom variant="h5" component="div">
        {props.record.name + " " + props.record.surname}
      </Typography>
      <Typography variant="body2" color="#fff">
        <img src={props.record.na0} alt="Nacionalidad"></img>
      </Typography>
      <Typography variant="body2" color="#fff">
        {props.record.age0}
      </Typography>
      <Typography variant="body2" color="#fff">
        {props.record.pn + " - " + props.record.ps}
      </Typography>
    </CardContent>
    <CardActions className="squad-players-card-actions">
      <Button
        as={Link}
        to={`/detail/${props.record._id}`}
        className="btn-squad-players"
        size="small"
      >
        Detalles
      </Button>
      <Button
        as={Link}
        to={`/edit/${props.record._id}`}
        className="btn-squad-players"
        size="small"
      >
        Editar
      </Button>
    </CardActions>
    <Button
      className="btn-squad-players"
      onClick={() => {
        props.deleteRecord(props.record._id);
      }}
      size="small"
    >
      Delete
    </Button>
  </Card>
);

// List only DEL players function
const RecordDEL = (props) => (
  <Card
    sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
    className="squad-players-card"
  >

    <CardContent className="squad-players-card">
      <Typography gutterBottom variant="h5" component="div">
        {props.record.name + " " + props.record.surname}
      </Typography>
      <Typography variant="body2" color="#fff">
        <img src={props.record.na0} alt="Nacionalidad"></img>
      </Typography>
      <Typography variant="body2" color="#fff">
        {props.record.age0}
      </Typography>
      <Typography variant="body2" color="#fff">
        {props.record.pn + " - " + props.record.ps}
      </Typography>
    </CardContent>
    <CardActions className="squad-players-card-actions">
      <Button
        as={Link}
        to={`/detail/${props.record._id}`}
        className="btn-squad-players"
        size="small"
      >
        Detalles
      </Button>
      <Button
        as={Link}
        to={`/edit/${props.record._id}`}
        className="btn-squad-players"
        size="small"
      >
        Editar
      </Button>
    </CardActions>
    <Button
      className="btn-squad-players"
      onClick={() => {
        props.deleteRecord(props.record._id);
      }}
      size="small"
    >
      Delete
    </Button>
  </Card>
);

export default function SquadPlayer() {
  const [records, setRecords] = useState([]);

  // This method fetches the player data from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://manchego.onrender.com/record/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a player
  async function deleteRecord(id) {
    await fetch(`https://manchego.onrender.com/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // map data id
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // map data id & pn = POR
  function recordListPOR() {
    return records.map((record) => {
      if (record.pn == "POR") {
        //console.log(record)
        return (
          <RecordPOR
            record={record}
            deleteRecord={() => deleteRecord(record._id)}
            key={record._id}
          />
        );
      }
    });
  }

  // map data id & pn = DC-LD-LI-CRD-CRI
  function recordListDEF() {
    return records.map((record) => {
      if (record.pn == "DC" || record.pn == "LD" || record.pn == "LI" || record.pn == "CRD" || record.pn == "CRI") {
        //console.log(record)
        return (
          <RecordDEF
            record={record}
            deleteRecord={() => deleteRecord(record._id)}
            key={record._id}
          />
        );
      }
    });
  }

  // map data id & pn = PIV DEF-MC-MP
  function recordListMED() {
    return records.map((record) => {
      if (record.pn == "PIV DEF" || record.pn == "MC" || record.pn == "MP") {
        //console.log(record)
        return (
          <RecordMED
            record={record}
            deleteRecord={() => deleteRecord(record._id)}
            key={record._id}
          />
        );
      }
    });
  }

  // map data id & pn = PIV DEF-MC-MP
  function recordListDEL() {
    return records.map((record) => {
      if (record.pn == "DEL" || record.pn == "EXI" || record.pn == "EXD") {
        //console.log(record)
        return (
          <RecordDEL
            record={record}
            deleteRecord={() => deleteRecord(record._id)}
            key={record._id}
          />
        );
      }
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <>
      <h1>Plantilla</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400, backgroundColor: '#190e43' }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell sx={{ color: 'white' }}>Nombre</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell sx={{ color: 'white' }} align="center">Posición</TableCell>
              <TableCell sx={{ color: 'white' }} align="center">Edad</TableCell>
              <TableCell sx={{ color: 'white' }} align="center">Nacionalidad</TableCell>
              <TableCell sx={{ color: 'white' }} align="center">Borrar</TableCell>
            </TableRow>
          </TableHead>
          {recordList()}

        </Table>
      </TableContainer>


      <h2>Porteros</h2>
      <Grid
        container
        marginTop="50px"
        display="flex"
        wrap="wrap"
        justifyContent="center"
      >
        {recordListPOR()}
      </Grid>

      <div className="line-container">
        <div className="line"></div>
      </div>

      <h2>Defensas</h2>
      <Grid
        container
        marginTop="50px"
        display="flex"
        wrap="wrap"
        justifyContent="center"
      >
        {recordListDEF()}
      </Grid>

      <div className="line-container">
        <div className="line"></div>
      </div>

      <h2>Mediocampistas</h2>
      <Grid
        container
        marginTop="50px"
        display="flex"
        wrap="wrap"
        justifyContent="center"
      >
        {recordListMED()}
      </Grid>

      <div className="line-container">
        <div className="line"></div>
      </div>

      <h2>Delanteros</h2>
      <Grid
        container
        marginTop="50px"
        display="flex"
        wrap="wrap"
        justifyContent="center"
      >
        {recordListDEL()}
      </Grid>
    </>
  );
}
