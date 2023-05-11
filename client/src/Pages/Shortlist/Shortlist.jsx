import React, { useEffect, useState } from "react";
import {
  Button, Container,
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
import "./Shortlist.css";
import Loading from "../../Components/Spinner/Spinner";
import Input from '@mui/material/Input';




function calculateAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}

// List only POR players function
const RecordPOR = (props) => (
  <TableBody>

    <TableRow

    >
      <TableCell component="th" scope="row" sx={{ color: 'white' }} as={Link} className='player-name-table' to={`/shortlisted-player/${props.record._id}`}>
        {props.record.name + " " + props.record.surname}

      </TableCell>
      <TableCell align="left">
        <Button

          as={Link}
          to={`/edit-shortlisted-player/${props.record._id}`}


        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg>
        </Button>
      </TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>{calculateAge(props.record.fn)} años </TableCell>
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

  </TableBody>
);

// List only POR players function
const RecordDEF = (props) => (
  <TableBody>

    <TableRow

    >
      <TableCell component="th" scope="row" sx={{ color: 'white' }} as={Link} className='player-name-table' to={`/shortlisted-player/${props.record._id}`}>
        {props.record.name + " " + props.record.surname}

      </TableCell>
      <TableCell align="left">
        <Button

          as={Link}
          to={`/edit-shortlisted-player/${props.record._id}`}


        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg>
        </Button>
      </TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>{calculateAge(props.record.fn)} años</TableCell>
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

  </TableBody>
);

// List only MED players function
const RecordMED = (props) => (
  <TableBody>

    <TableRow

    >
      <TableCell component="th" scope="row" sx={{ color: 'white' }} as={Link} className='player-name-table' to={`/shortlisted-player/${props.record._id}`}>
        {props.record.name + " " + props.record.surname}

      </TableCell>
      <TableCell align="left">
        <Button

          as={Link}
          to={`/edit-shortlisted-player/${props.record._id}`}


        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg>
        </Button>
      </TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>{calculateAge(props.record.fn)} años</TableCell>
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

  </TableBody>
);

// List only DEL players function
const RecordDEL = (props) => (
  <TableBody>

    <TableRow

    >
      <TableCell component="th" scope="row" sx={{ color: 'white' }} as={Link} className='player-name-table' to={`/shortlisted-player/${props.record._id}`}>
        {props.record.name + " " + props.record.surname}

      </TableCell>
      <TableCell align="left">
        <Button

          as={Link}
          to={`/edit-shortlisted-player/${props.record._id}`}


        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
          </svg>
        </Button>
      </TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>{props.record.pn + " - " + props.record.ps}</TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>{calculateAge(props.record.fn)} años</TableCell>
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

  </TableBody>
);

export default function Shortlist() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState('');



  // This method fetches the player data from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://lemurpromanagement-mdg.app/preselectPlayer/`);

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
  async function deleteRecord(id) {
    await fetch(`https://lemurpromanagement-mdg.app//deletePreselect/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }


  // map data id & pn = POR
  function recordListPOR() {
    return results.map((record) => {
      if (record.pn === "POR") {
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
    return results.map((record) => {
      if (record.pn === "DC" || record.pn === "LD" || record.pn === "LI" || record.pn === "CRD" || record.pn === "CRI") {
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
    return results.map((record) => {
      if (record.pn === "PIV DEF" || record.pn === "MC" || record.pn === "MP") {
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
    return results.map((record) => {
      if (record.pn === "DEL" || record.pn === "EXI" || record.pn === "EXD") {
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



  const results = !search ? records : records.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  // This following section will display the table with the records of individuals.
  return (
    <>

      <h1 className="page-title">PRESELECCIÓN</h1>

      <Loading loading={isLoading}>
        <Container>
          <div className="buscar">
            <Input className="input-filter-table" placeholder="Nombre" onChange={(e) => setSearch(e.target.value)}></Input>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
          </div>
          <TableContainer>
            <Table sx={{ minWidth: 400 }} aria-label="simple table" className="table-players">
              <TableHead>
                <TableRow >
                  <TableCell sx={{ color: '#fff' }}>NOMBRE</TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell sx={{ color: '#fff' }} align="center">POSICIÓN</TableCell>
                  <TableCell sx={{ color: '#fff' }} align="center">EDAD</TableCell>
                  <TableCell sx={{ color: '#fff' }} align="center">NACIONALIDAD</TableCell>
                  <TableCell sx={{ color: '#fff' }} align="center">ELIMINAR</TableCell>
                </TableRow>
              </TableHead>

              {recordListPOR()}
              {recordListDEF()}
              {recordListMED()}
              {recordListDEL()}

            </Table>
          </TableContainer>
        </Container>

      </Loading>
    </>
  );
}