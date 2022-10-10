import React from "react";
import {Box, Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {Formik,FormikProps} from "formik"
import {User} from "../../../types/user.type"
import Link from "@mui/material/Link";
import {Link as RouterLink,useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../reducers";
import * as loginActions from "../../../actions/login.action"

type LoginProps = {};

function LoginPage(props: LoginProps) {
  //const history=useNavigate();
  const dispatch=useDispatch();
  const loginReducer=useSelector((state:RootReducer)=>state.loginReducer);


  const classed: any = {
    root: { display: "flex", justifyContent: "center", alignItems: "center",paddingTop:2 },
    submitBtn: { marginTop: 4 },
    cancelBtn: { marginTop: 2 },
  };

  const initialValue:User={username:"Noah x",password:""};

  const showForm=({values,handleChange,handleSubmit,setFieldValue,isSubmitting}:FormikProps<User>)=>{
    return (
      <form noValidate onSubmit={handleSubmit}>
        <TextField 
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          onChange={handleChange}
          value={values.username}
          autoComplete="email"
          autoFocus
        />
        <TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         onChange={handleChange}
         value={values.password}
         name="password"
         label="Password"
         type="password"
         autoComplete="current-password"
        />
        <Button
        sx={classed.submitBtn}
        type="submit"
         fullWidth
         variant="outlined"
         color="primary"
         disabled={isSubmitting}
        >
          sign in
        </Button>
        <Grid container sx={{padding:2,justifyContent:"center"}}>
          <Link component={RouterLink} to="/" variant="body2">
            Don't have an account? Register
          </Link>
        </Grid>
      </form>
    );
  }

  return (
    <Box sx={classed.root}>
       <Card sx={{maxWidth:345}}>
          <CardMedia
            component="img"
            alt="CPI"
            height="200"
            image={`${process.env.PUBLIC_URL}/images/farmqc.jpeg`}
            title="Login Page"
           />
           <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Login
            </Typography>
            <Formik
             initialValues={initialValue}
             onSubmit={async (values,{setSubmitting})=>{
                //dispatch(loginActions.login(values));
                setSubmitting(false);
             }}
            >
              {(props)=>showForm(props)}
            </Formik>
           </CardContent>
       </Card>
    </Box>
  );
}

export default LoginPage;
