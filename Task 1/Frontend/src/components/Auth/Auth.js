import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useStyles } from "./AuthStyles";
import * as authActions from "../../store/actions/auth";

export default function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  //states
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(true);

  // handlers
  const handleIsSigningIn = (e) => {
    e.preventDefault();
    setIsSigningIn((prevState) => !prevState);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      isSigningIn
        ? await dispatch(authActions.login(email, password, "/user/login"))
        : await dispatch(authActions.signup(email, password, "/user/signup"));
        history.push('/companies')
    } catch (e) {
      alert(e.message)
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSigningIn ? "Sign in" : "Sign Up"}
        </Typography>
        <form className={classes.form} noValidate onSubmit={formSubmitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSigningIn ? "Sign in" : "Sign Up"}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2" onClick={handleIsSigningIn}>
                {isSigningIn
                  ? "Don't have an account? Sign Up"
                  : "Sign in instead"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
