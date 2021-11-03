/* eslint-disable no-unused-expressions */
import React from 'react';

// material-ui
import { useTheme } from '@material-ui/core/styles';
import {
    Grid,
    Stack,
    Typography,
    useMediaQuery,
    Button,
    Slide,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText
} from '@material-ui/core';
// project imports
import AuthWrapper1 from '../../components/AuthWrapper1';
import AuthCardWrapper from '../../components/AuthCardWrapper';
import FormForgotPassword from './components/FormForgotPassword';
// import AlertSuccessForgotPassword from './components/AlertSuccessForgotPassword';
import AuthFooter from 'ui-component/cards/AuthFooter';
import Logo from 'ui-component/Logo';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// assets

//= ===============================|| AUTH3 - LOGIN ||================================//

const ForgotPassword = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [show, setShow] = React.useState(false);
    const handleClose = () => {
        setShow(!show);
    };
    const callback = (count) => {
        setShow(count);
    };
    return (
        <AuthWrapper1>
            <Dialog
                open={show}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle style={{ alignItems: 'center', textAlign: 'center' }}>
                    <Logo />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Typography align="center" variant="subtitle1" gutterBottom component="div">
                            Email has been sent.
                        </Typography>
                        <Typography align="center" variant="body1" gutterBottom component="div">
                            Please check your inbox to reset a password.
                        </Typography>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            ;
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        sx={{
                                                            color: '#15489D'
                                                        }}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        FORGOT YOUR PASSWORD?
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormForgotPassword parentCallback={callback} login={3} />
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default ForgotPassword;
