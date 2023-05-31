import React, { useEffect, useState } from "react";
import {
  Button, Container, Grid,
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
import ShortlistedField from "./ShortlistedField";

export default function Shortlist() {

  return (
    <>
    <ShortlistedField></ShortlistedField>



    </>
  );
}