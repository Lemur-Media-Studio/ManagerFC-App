import React, { useState } from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Container, FormLabel, Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FacebookIcon from "@mui/icons-material/Facebook";
import SaveIcon from "@mui/icons-material/Save";
import "./AddToSquad.css";


import {
  nacionalidades,
  languages,
  maritalStatusValues,
  childsValues,
  positionValues,
  footValues,
  tecnicoValues,
  mentalValues,
  fisicoValues,
  gkValues,
  contractValues,
} from "../../Utils/playersInfo";
import MenuItem from "@mui/material/MenuItem";
import {
  AlternateEmail,
  Instagram,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";

export default function AddToSquad() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    img: "",
    fn: "",
    age0: "",
    na0: "",
    na1: "",
    age1: "",
    s1: "",
    s2: "",
    s3: "",
    pn: "",
    ps: "",
    ph: "",
    alt: "",
    peso: "",
    tec: "",
    fisico: "",
    mental: "",
    gk: "",
    c: "",
    sb: "",
    ss: "",
    com: "",
    fin: "",
    agente: "",
    por0: "",
    asis: "",
    gol: "",
    cpo: "",
    gll: "",
    sc: "",
    cp: "",
    ca: "",
    phone: "",
    email: "",
    face: "",
    ig: "",
    tw: "",
    tf: "",
    bs: "",
    yt: "",
    inci: "",
  });

  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("https://lemurpromanagement-mdg.app/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      name: "",
      surname: "",
      img: "",
      fn: "",
      age0: "",
      na0: "",
      na1: "",
      age1: "",
      s1: "",
      s2: "",
      s3: "",
      pn: "",
      ps: "",
      ph: "",
      alt: "",
      peso: "",
      tec: "",
      fisico: "",
      mental: "",
      gk: "",
      c: "",
      sb: "",
      ss: "",
      com: "",
      fin: "",
      agente: "",
      por0: "",
      asis: "",
      gol: "",
      cpo: "",
      gll: "",
      sc: "",
      cp: "",
      ca: "",
      phone: "",
      email: "",
      face: "",
      ig: "",
      tw: "",
      tf: "",
      bs: "",
      yt: "",
      inci: "",
    });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <Container sx={{ mt: 5, color: "#fff" }}>

      <Box
        className="form-squad"
        component="form"
        onSubmit={onSubmit}
        sx={{
          "& .MuiTextField-root": { mt: 5, mx: 1 },
        }}
        noValidate
        autoComplete="off"
      >

        <h1 className="page-title">AÑADIR A PLANTILLA</h1>

        <h2>DATOS PERSONALES</h2>

        <TextField
          sx={{ width: "24ch", color: "white !important" }}
          required
          label={"Nombre"}
          id="name"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />

        <TextField
          sx={{ width: "24ch" }}
          required
          label="Apellido"
          id="surname"
          value={form.surname}
          onChange={(e) => updateForm({ surname: e.target.value })}
        />

        <TextField
          sx={{ width: "24ch" }}
          label="IMG"
          id="img"
          value={form.img}
          onChange={(e) => updateForm({ img: e.target.value })}
        />
        <TextField
          type="date"
          sx={{ width: "24ch" }}
          required
          id="fn"
          label="Fecha de nacimiento"
          InputLabelProps={{ shrink: true, required: true }}
          value={form.fn}
          onChange={(e) => updateForm({ fn: e.target.value })}

        />

        <TextField
          sx={{ width: "24ch" }}
          required
          id="outlined-required"
          label="Edad"
          value={form.age0}
          onChange={(e) => updateForm({ age0: e.target.value })}
        />

        <TextField
          sx={{ width: "24ch" }}
          required
          id="outlined-select-currency"
          select
          label="Nacionalidad"
          value={form.na0}
          onChange={(e) => updateForm({ na0: e.target.value })}
        >
          {nacionalidades.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.imgValue}>
              <img
                alt="nacionalidad"
                src={option.imgValue}
                key={option.imgValue}
              ></img>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ width: "24ch" }}
          id="outlined-select-currency"
          select
          label="Segunda nacionalidad"
          value={form.na1}
          onChange={(e) => updateForm({ na1: e.target.value })}
        >
          {nacionalidades.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.imgValue}>
              <img
                alt="nacionalidad"
                src={option.imgValue}
                key={option.imgValue}
              ></img>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{ width: "24ch" }}
          id="outlined-select-currency"
          select
          label="Idiomas"
          value={form.s1}
          onChange={(e) => updateForm({ s1: e.target.value })}
        >
          {languages.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ width: "24ch" }}
          id="outlined-select-currency"
          select
          label="Estado Civil"
          value={form.s2}
          onChange={(e) => updateForm({ s2: e.target.value })}
        >
          {maritalStatusValues.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          sx={{ width: "24ch" }}
          id="outlined-select-currency"
          select
          label="Hijos"
          value={form.s3}
          onChange={(e) => updateForm({ s3: e.target.value })}
        >
          {childsValues.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        {/**/}
        <div className="line-form"></div>
        <h2>PERFIL FUTBOLÍSTICO</h2>
        <TextField
          sx={{ width: "24ch" }}
          required
          id="outlined-select-currency"
          select
          label="Posicion natural"
          value={form.pn}
          onChange={(e) => updateForm({ pn: e.target.value })}
        >
          {positionValues.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{ width: "24ch" }}
          id="outlined-select-currency"
          select
          label="Posicion secundaria"
          value={form.ps}
          onChange={(e) => updateForm({ ps: e.target.value })}
        >
          {positionValues.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={{ width: "24ch" }}
          id="outlined-select-currency"
          select
          label="Perfil habil"
          value={form.ph}
          onChange={(e) => updateForm({ ph: e.target.value })}
        >
          {footValues.map((option) => (
            <MenuItem key={option.value} className='dropdown-item' value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <FormLabel sx={{ mt: 5 }} className='form-label'>FÍSICO</FormLabel>

        <TextField
          sx={{ width: "14ch" }}
          label="Altura"
          value={form.alt}
          onChange={(e) => updateForm({ alt: e.target.value })}
        />
        <TextField
          sx={{ width: "14ch" }}
          label="Peso"
          value={form.peso}
          onChange={(e) => updateForm({ peso: e.target.value })}
        />
        <TextField
          sx={{ width: "14ch" }}
          label="Peso ideal"
          value={form.peso}
          onChange={(e) => updateForm({ peso: e.target.value })}
        />

        <Grid
          className="attributes"
          container
          display="flex"
          wrap="wrap"
          justifyContent="center"
          textAlign="left"
          sx={{ mt: 8 }}
        >

          <Grid xs={12} sx={{ textAlign: 'center', mt: 4, mb: 2 }}>
            <h3>ATRIBUTOS</h3>
          </Grid>

          <Grid xs={3}>
            <FormLabel
              sx={{ mt: 2, pl: 5 }}
              component="legend"
              className="attributes-label"
            >
              TÉCNICO
            </FormLabel>
            <ul>
              {tecnicoValues.map((option) => (
                <li>
                  <FormControlLabel
                    value={option.value}
                    control={<Checkbox />}
                    label={option.value}
                    onChange={(e) =>
                      updateForm({ tec: e.target.value })
                    }
                    labelPlacement="right"
                  />
                </li>
              ))}
            </ul>
          </Grid>

          <Grid xs={3}>
            <FormLabel
              sx={{ mt: 2, pl: 5 }}
              component="legend"
              className="attributes-label"
            >
              FISICO
            </FormLabel>
            <ul>
              {fisicoValues.map((option) => (
                <li key={option.value}>
                  <FormControlLabel
                    value={option.value}
                    control={
                      <Checkbox
                        checked={form.fisico === option.value}
                        onChange={(e) =>
                          updateForm({ fisico: e.target.value })
                        }
                      />
                    }
                    label={option.value}
                  />
                </li>
              ))}
            </ul>
          </Grid>
          <Grid xs={3}>
            <FormLabel
              sx={{ mt: 2, pl: 5 }}
              component="legend"
              className="attributes-label"
            >
              MENTAL
            </FormLabel>
            <ul>
              {mentalValues.map((option) => (
                <li key={option.value}>
                  <FormControlLabel
                    value={option.value}
                    control={
                      <Checkbox
                        checked={form.mental === option.value}
                        onChange={(e) =>
                          updateForm({ mental: e.target.value })
                        }
                      />
                    }
                    label={option.value}
                  />
                </li>
              ))}
            </ul>
          </Grid>
          <Grid xs={3}>
            <FormLabel
              sx={{ mt: 2, pl: 5 }}
              component="legend"
              className="attributes-label"
            >
              PORTERO
            </FormLabel>
            <ul>
              {gkValues.map((option) => (
                <li key={option.value}>
                  <FormControlLabel
                    value={option.value}
                    control={
                      <Checkbox
                        checked={form.gk === option.value}
                        onChange={(e) =>
                          updateForm({ gk: e.target.value })
                        }
                      />
                    }
                    label={option.value}
                  />
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>

        <div>
          <TextField
            sx={{ width: { xs: "30ch", sm: "65ch" } }}
            label="Características"
            id="outlined-multiline-static"
            rows={6}
            multiline
            value={form.c}
            onChange={(e) => updateForm({ c: e.target.value })}
          />
        </div>

        <div className="line-form"></div>

        <h2>CONTRATO</h2>

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Salario bruto"
          value={form.sb}
          onChange={(e) => updateForm({ sb: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Alta en SS"
          value={form.ss}
          onChange={(e) => updateForm({ ss: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Comienzo"
          value={form.com}
          onChange={(e) => updateForm({ com: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Final"
          value={form.fin}
          onChange={(e) => updateForm({ fin: e.target.value })}

        />

        <TextField
          sx={{ width: { xs: "30ch", sm: "24ch" } }}
          label="Agente"
          id="Agente"
          value={form.agente}
          onChange={(e) => updateForm({ agente: e.target.value })}
        />

        <FormLabel className='form-label' sx={{ mt: 5 }}>PRIMAS</FormLabel>

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Portería en 0"
          value={form.por0}
          onChange={(e) => updateForm({ por0: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Asistencia"
          value={form.asis}
          onChange={(e) => updateForm({ asis: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Gol"
          value={form.gol}
          onChange={(e) => updateForm({ gol: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Clasificar a Playoff"
          value={form.cpo}
          onChange={(e) => updateForm({ cpo: e.target.value })}

        />

        <TextField
          sx={{ width: '24ch' }}
          id="outlined-required"
          label="Ganar la Liga"
          value={form.gll}
          onChange={(e) => updateForm({ gll: e.target.value })}

        />

        <div className="line-form"></div>

        <h2>CONTACTO Y LINKS</h2>
        <TextField
          sx={{ width: "24ch" }}
          label={<Phone />}
          id="img"
          value={form.phone}
          onChange={(e) => updateForm({ phone: e.target.value })}
        />
        <TextField
          sx={{ width: "24ch" }}
          label={<AlternateEmail />}
          id="img"
          value={form.email}
          onChange={(e) => updateForm({ email: e.target.value })}
        />
        <FormLabel className='form-label' sx={{ mt: 5 }}>
          REDES SOCIALES
        </FormLabel>
        <TextField
          sx={{ width: "24ch" }}
          label={<FacebookIcon />}
          id="img"
          value={form.face}
          onChange={(e) => updateForm({ face: e.target.value })}
        />
        <TextField
          sx={{ width: "24ch" }}
          label={<Instagram />}
          id="img"
          value={form.ig}
          onChange={(e) => updateForm({ ig: e.target.value })}
        />
        <TextField
          sx={{ width: "24ch" }}
          label={<Twitter />}
          id="img"
          value={form.tw}
          onChange={(e) => updateForm({ tw: e.target.value })}
        />
        <FormLabel className='form-label' sx={{ mt: 5 }}>
          LINKS
        </FormLabel>
        <TextField
          sx={{ width: "24ch" }}
          label="Transfermarkt"
          id="img"
          value={form.tf}
          onChange={(e) => updateForm({ tf: e.target.value })}
        />
        <TextField
          sx={{ width: "24ch" }}
          label="Besoccer"
          id="img"
          value={form.bs}
          onChange={(e) => updateForm({ bs: e.target.value })}
        />
        <TextField
          sx={{ width: "24ch" }}
          label={<YouTube />}
          id="img"
          value={form.yt}
          onChange={(e) => updateForm({ yt: e.target.value })}
        />
        <div className="line-form"></div>

        <h2>INCIDENCIAS</h2>

        <div>
          <TextField
            sx={{ width: { xs: "30ch", sm: "65ch" } }}
            label="Ingresar incidencias"
            id="outlined-multiline-static"
            rows={6}
            multiline
            value={form.inci}
            onChange={(e) => updateForm({ inci: e.target.value })}
          />
        </div>

        <div className="form-group">
          <Button
            type="submit"
            sx={{
              mt: 5,
              mb: 5,
              backgroundColor: "#9b0181 !important",
              color: "#fff !important",
            }}
            size="small"
            startIcon={<SaveIcon />}
            variant="contained"
            value="Create person"
          >
            Guardar
          </Button>
        </div>
      </Box>
    </Container>
  );
}
