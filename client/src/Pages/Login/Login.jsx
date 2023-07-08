import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import "./Login.css"
import { TextField } from '@mui/material';

function Login(){

    return(
        <>
            <Card sx={{ maxWidth: 500 }} className="card-login">
                <CardContent>

                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="Usuario" variant="outlined" />
                    </Box>

                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
                    </Box>

                    <Button 
                    sx={{
                        mt: 2,
                        mb: 5,
                        backgroundColor: "#9b0181 !important",
                        color: "#fff !important",
                        }}
                    size="small"
                    >
                        Ingresar
                    </Button>

                </CardContent>
            </Card>
        </>
    )
}

export default Login