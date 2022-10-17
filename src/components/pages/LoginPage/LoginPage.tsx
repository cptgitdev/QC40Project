import React, { useEffect } from "react";
import {Box, Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {Formik,FormikProps} from "formik"
import {User} from "../../../types/user.type"
import Link from "@mui/material/Link";
import {Link as RouterLink,Navigate,useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {authenSelector, login} from "../../../slices/Authen/authenSlice";




type LoginProps = {};

function LoginPage(props: LoginProps) {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const classed: any = {
    root: { display: "flex", justifyContent: "center", alignItems: "center",paddingTop:2 },
    submitBtn: { marginTop: 4 },
    cancelBtn: { marginTop: 2 },
  };

  const {isLogin}=useSelector(authenSelector);
  React.useEffect(()=>{
    if(isLogin)navigate('/Home');
  },[isLogin]);

  // useEffect(()=>{
  //   if(user.isLogin){
  //     navigate('/Home');
  //   }else{
  //     console.log('Login : false')
  //   }
  // },[])

  const initialValue:User={username:"sathaporn",password:"xxx"};

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
             onSubmit={(values,{setSubmitting})=>{

                dispatch(login(values));
                // if(user.isLogin){
                //   navigate('/Home');
                // }else{

                // }
            

                
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
