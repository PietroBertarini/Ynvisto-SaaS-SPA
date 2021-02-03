import React, { useEffect, useState } from 'react';
import '../../../Theme/sweetalert2/sweetalert2.scss';
import Typography from '@material-ui/core/Typography';
import {
  Box, Button, Card, TextField, Link,
} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import LoginSpinner from '../../Components/Spinner/LoginSpinner.component';
import { State } from '../../../Redux/root-reducer';
import {
  loginCleanErrors,
  loginRequest,
} from '../../../Redux/Services/Authorization/Authorization.actions';
import { useStyles } from './Login.styles';

/**
 */
const mapStateToProps = (state: State) => ({
  isFetching: state.authorization.isFetching,
  user: state.authorization.user,
  error: state.authorization.error,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function Login({ error: errorFromServer, user, isFetching }: Props) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState('');
  const [key, setKey] = useState('');
  const [emptyLogin, setEmptyErrorLogin] = useState(false);
  const dispatch = useDispatch();
  const submitForm = () => {
    if (email === '' || key === '') {
      setEmptyErrorLogin(true);
    } else {
      dispatch(loginRequest({ email, key }));
    }
  };

  useEffect(() => {
    dispatch(loginCleanErrors());
  }, [dispatch]);
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="flex-start">
        <Typography variant="h2" className={classes.logo}>
          Ynvisto
        </Typography>
      </Box>
      <Box
        display="flex"
        alignSelf="center"
        justifyContent="center"
        className={classes.box}
      >
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Box
              display="flex"
              flexDirection="column"
              alignSelf="center"
              justifyContent="center"
            >
              <Typography variant="h4" className={classes.title}>
                Faça seu login
              </Typography>
              <form noValidate autoComplete="current-password">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignSelf="center"
                  justifyContent="center"
                >
                  <TextField
                    id="standard-basic"
                    label="E-mail"
                    className={classes.textField}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    inputProps={{ className: classes.inputText }}
                  />
                  <FormControl className={classes.textField}>
                    <InputLabel>Chave</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      style={{ color: '#FFFFFF' }}
                      type={showPassword ? 'text' : 'password'}
                      value={key}
                      autoComplete="on"
                      onChange={(e) => setKey(e.target.value)}
                      endAdornment={(
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            style={{ color: '#B1B1B1' }}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      )}
                    />
                  </FormControl>
                </Box>
              </form>
              {emptyLogin && email === '' && (
                <Typography variant="h6" className={classes.error}>
                  Preencha o email
                </Typography>
              )}
              {emptyLogin && key === '' && (
                <Typography variant="h6" className={classes.error}>
                  Preencha a chave.
                </Typography>
              )}
              {errorFromServer?.errorMessage !== undefined
                && email !== ''
                && key !== '' && (
                  <Typography variant="h6" className={classes.error}>
                    {errorFromServer.errorMessage}
                  </Typography>
                )}

              {errorFromServer?.errorMessage === undefined
                && errorFromServer !== undefined
                && email !== ''
                && key !== '' && (
                  <Typography variant="h6" className={classes.error}>
                    Algo estranho aconteceu.
                  </Typography>
                )}

              <Box display="flex" alignSelf="center" justifyContent="center">
                {!isFetching && (
                  <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={submitForm}
                  >
                    Continuar
                  </Button>
                )}
                {isFetching && <LoginSpinner />}
              </Box>
              <Typography variant="h6" className={classes.link}>
                <Link target="_blank" href="https://form.jotform.com/ynvisto/chave-ynvisto" className={classes.linkText}>
                  Esqueci minha chave
                </Link>
              </Typography>
              <Typography variant="h6" className={classes.link}>
                <Link target="_blank" href="https://www.ynvisto.com/#pricing" className={classes.linkText}>
                  Ainda não sou cliente
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
export default connector(Login);
