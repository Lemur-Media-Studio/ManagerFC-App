import React from "react"
import "./ShortlistField.css";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

function ShortlistField(){

    return(

        <Box
            sx={{
                width: 520,
                height: 650,
                backgroundImage: 'url(https://sharemytactics.com/images/pitch.png)',
            }}
            className="field-img"
        >
            <Button sx={{width: 60, height: 50, top:"60px", left:"380px"}} color="secondary" variant="contained">POR</Button>
            <Button sx={{width: 60, height: 50, top:"150px", left:"260px"}} color="primary" variant="contained">DC</Button>
            <Button sx={{width: 60, height: 50, top:"150px", left:"310px"}} color="primary" variant="contained">DC</Button>
            <Button sx={{width: 60, height: 50, top:"190px", left:"40px"}} color="primary" variant="contained">LD</Button>
            <Button sx={{width: 60, height: 50, top:"190px", left:"270px"}} color="primary" variant="contained">LI</Button>
            <Button sx={{width: 60, height: 50, top:"270px", right:"88px"}} color="primary" variant="contained">CRD</Button>
            <Button sx={{width: 60, height: 50, top:"270px", left:"142px"}} color="primary" variant="contained">CRI</Button>
            <Button sx={{width: 60, height: 50, top:"270px", right:"68px"}} color="primary" variant="contained">PIV DEF</Button>
            <Button sx={{width: 60, height: 50, top:"344px", right:"132px"}} color="primary" variant="contained">MC</Button>
            <Button sx={{width: 60, height: 50, top:"420px", right:"196px"}} color="primary" variant="contained">MP</Button>
            <Button sx={{width: 60, height: 50, top:"450px", right:"408px"}} color="primary" variant="contained">EXD</Button>
            <Button sx={{width: 60, height: 50, top:"450px", right:"178px"}} color="primary" variant="contained">EXI</Button>
            <Button sx={{width: 60, height: 50, top:"520px", right:"388px"}} color="primary" variant="contained">DEL</Button>
        </Box>

    )
}
export default ShortlistField