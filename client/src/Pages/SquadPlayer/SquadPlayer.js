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
import { Link } from "react-router-dom";
import "./SquadPlayer.css";

// List players function
/* const Record = (props) => (
  <Grid
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
  </Grid>
); */

// List only POR players function
const RecordPOR = (props) => (
    <Card
      sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
      className="squad-players-card"
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        width="400"
        image={props.record.img}
      />
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
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        width="400"
        image={props.record.img}
      />
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
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        width="400"
        image={props.record.img}
      />
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
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        width="400"
        image={props.record.img}
      />
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
      const response = await fetch(`http://localhost:3001/record/`);

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
    await fetch(`http://localhost:3001/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // map data id
/*   function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  } */

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
{/*       <div>{recordList()}</div> */}

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
