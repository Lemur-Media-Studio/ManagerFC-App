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

const Record = (props) => (
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
  </Grid>
);

export default function SquadPlayer() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
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

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:3001/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
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

  // This following section will display the table with the records of individuals.
  return (
    <>
      <div>{recordList()}</div>

      <h1>Plantilla</h1>

      <h2>Porteros</h2>
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
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            width="400"
            image="https://lh3.googleusercontent.com/pw/AMWts8BwSPhosGGYhDLbA_xxNehQsSzJ3pFB1CfcG4ecViTS2C2dMopPgwD-FvQAQK2Y3lrpknENlWVg9HFYQY75JbKE5KnP4ik5ANZqW3XPXswFwio97HDW4x3f1sCat1WKPm3akuafuFWTGkSySr0Zaos9=w696-h975-s-no?authuser=0"
          />
          <CardContent className="squad-players-card">
            <Typography gutterBottom variant="h5" component="div">
              Carlos Mena
            </Typography>
            <Typography variant="body2" color="#fff">
            🇪🇸
            </Typography>
            <Typography variant="body2" color="#fff">
              26 años
            </Typography>
            <Typography variant="body2" color="#fff">
              POR
            </Typography>
          </CardContent>
          <CardActions className="squad-players-card-actions">
            <Button className="btn-squad-players" size="small">
              Details
            </Button>
            <Button className="btn-squad-players" size="small">
              Edit
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
          className="squad-players-card"
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            width="400"
            image="https://lh3.googleusercontent.com/pw/AMWts8BJB3pzMGBfj-w-Prh3OvVAr6elssykLFkW3Xa_QWnKF7kxGJDbL29FhNlZOTzzFt_eqFkPWIl-yUa5_TQG5h3IfytXOiQ9CNjdbBQLx_DWmohLY4J3zy-y9ssgS9eVC4tvaX8BWf0xI1V6XDx0NSRj=w500-h500-s-no?authuser=0"
          />
          <CardContent className="squad-players-card">
            <Typography gutterBottom variant="h5" component="div">
              Marvyn Dorchin
            </Typography>
            <Typography variant="body2" color="#fff">
            🇫🇷
            </Typography>
            <Typography variant="body2" color="#fff">
              26 años
            </Typography>
            <Typography variant="body2" color="#fff">
              POR
            </Typography>
          </CardContent>
          <CardActions className="squad-players-card-actions">
            <Button className="btn-squad-players" size="small">
              Details
            </Button>
            <Button className="btn-squad-players" size="small">
              Edit
            </Button>
          </CardActions>
        </Card>
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
        <Card
          sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
          className="squad-players-card"
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            width="400"
            image="https://lh3.googleusercontent.com/pw/AMWts8DspgMglH9i00j1yLn6DkU_Ay7V6681-ZtT39GbN_eQGbRNYT3eYUsmrLYAOKf_H9ApUEy6DpP5N3kp4rVZNeE30UG3Jb5j-kd_E8Sae0GqsIvTf8BT_QZTuTvrNUiY6s1eGMaeFYxU27fPgGZ1mylb=w696-h975-s-no?authuser=0"
          />
          <CardContent className="squad-players-card">
            <Typography gutterBottom variant="h5" component="div">
              Luciano Venturini
            </Typography>
            <Typography variant="body2" color="#fff">
              🇦🇷
            </Typography>
            <Typography variant="body2" color="#fff">
              31 años
            </Typography>
            <Typography variant="body2" color="#fff">
              DFC - LD
            </Typography>
          </CardContent>
          <CardActions className="squad-players-card-actions">
            <Button className="btn-squad-players" size="small">
              Details
            </Button>
            <Button className="btn-squad-players" size="small">
              Edit
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
          className="squad-players-card"
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            width="400"
            image="https://lh3.googleusercontent.com/pw/AMWts8C1tce_2-cKfv4yTqK_cAIV4DyoXntrfcNIXwva8zTJ3RSOsqYfYkzBiCmw1tasB7p2YpiddUIugwYMi_U3QdQ6p8ZHswiWvEhWrKKcZVY_77-X_TfkeuRFG7f5-KCHX5QPO97oP59BHZ5i87eDxDBb=w731-h975-s-no?authuser=0"
          />
          <CardContent className="squad-players-card">
            <Typography gutterBottom variant="h5" component="div">
              Alpha Diallo
            </Typography>
            <Typography variant="body2" color="#fff">
            🇪🇸
            </Typography>
            <Typography variant="body2" color="#fff">
              21 años
            </Typography>
            <Typography variant="body2" color="#fff">
              LD - CRD
            </Typography>
          </CardContent>
          <CardActions className="squad-players-card-actions">
            <Button className="btn-squad-players" size="small">
              Details
            </Button>
            <Button className="btn-squad-players" size="small">
              Edit
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
          className="squad-players-card"
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            width="400"
            image="https://lh3.googleusercontent.com/pw/AMWts8C-sDFa-dKZIlW5TUgNZsXbtuxFr1FXgZW43Go804hyKVYj2o9kmJQTOs-V97fgHlGu5RMjlN6lP2NgMYWOq1jNBtp-tn2IjxNXbGYfcgOz_9Oj2sF475l31L0GVoI55hf4ghNki6FiHEkwwGuhlnFc=w731-h975-s-no?authuser=0"
          />
          <CardContent className="squad-players-card">
            <Typography gutterBottom variant="h5" component="div">
              Carlos Sanjuan
            </Typography>
            <Typography variant="body2" color="#fff">
            🇪🇸
            </Typography>
            <Typography variant="body2" color="#fff">
              26 años
            </Typography>
            <Typography variant="body2" color="#fff">
              PIV - DFC
            </Typography>
          </CardContent>
          <CardActions className="squad-players-card-actions">
            <Button className="btn-squad-players" size="small">
              Details
            </Button>
            <Button className="btn-squad-players" size="small">
              Edit
            </Button>
          </CardActions>
        </Card>
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
        <Card
          sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
          className="squad-players-card"
        >
          <CardMedia
            component="img"
            alt="Foto de perfil"
            height="300"
            width="400"
            image="https://s.hs-data.com/bilder/spieler/gross/302274.jpg"
          />
          <CardContent className="squad-players-card">
            <Typography gutterBottom variant="h5" component="div">
              Rodrigo Bentancur
            </Typography>
            <Typography variant="body2" color="#fff">
              🇺🇾
            </Typography>
            <Typography variant="body2" color="#fff">
              25 años
            </Typography>
            <Typography variant="body2" color="#fff">
              MC - PIV DEF
            </Typography>
          </CardContent>
          <CardActions className="squad-players-card-actions">
            <Button className="btn-squad-players" size="small">
              Details
            </Button>
            <Button className="btn-squad-players" size="small">
              Edit
            </Button>
          </CardActions>
        </Card>
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
        <Card
          sx={{ maxWidth: 200, marginX: 4, marginY: 3 }}
          className="squad-players-card"
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            width="400"
            image="https://s.hs-data.com/bilder/spieler/gross/179293.jpg"
          />
          <CardContent className="squad-players-card">
            <Typography gutterBottom variant="h5" component="div">
              Harry Kane
            </Typography>
            <Typography variant="body2" color="#fff">
              🏴󠁧󠁢󠁥󠁮󠁧󠁿
            </Typography>
            <Typography variant="body2" color="#fff">
              29 años
            </Typography>
            <Typography variant="body2" color="#fff">
              DEL - SD
            </Typography>
          </CardContent>
          <CardActions className="squad-players-card-actions">
            <Button className="btn-squad-players" size="small">
              Details
            </Button>
            <Button className="btn-squad-players" size="small">
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
