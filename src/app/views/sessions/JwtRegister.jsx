import { LoadingButton } from '@mui/lab';
import {
  Box,
  Card,
  Checkbox,
  Grid,
  Stack,
  styled,
  TextField,
  useTheme,
} from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Paragraph, Small } from '../../components/Typography';
import useAuth from '../../hooks/useAuth';
import RegisterModal from './RegisterDoneDialog';
// STYLED COMPONENTS
const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(JustifyBox)(() => ({
  height: '100%',
  padding: '32px',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRegister = styled(JustifyBox)(() => ({
  background: '#1A2038',
  backgroundImage: 'url(\'/assets/images/home-bg.png\')',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

// initial login credentials
const initialValues = {
  email: '',
  password: '',
  username: '',
  phone: '',
  remember: true,
};

// form field validation schema
const validationSchema = Yup.object().shape({
  username: Yup.string().required('ID is required!'),
  password: Yup.string()
    .min(4, 'Password must be 4 character length')
    .required('Password is required!'),
  email: Yup.string()
    .email('Invalid Email address')
    .required('Email is required!'),
  phone: Yup.string().required('Phone number is required!'),

});

export default function JwtRegister () {
  const theme = useTheme();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errmsg, setErrmsg] = useState();
  const [showModal, setShowModal] = useState(false);
  const modalHandle = (event, reason) => {
    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
      setShowModal(!showModal);
      navigate('/session/signin');
    }
  };

  const handleFormSubmit = async (values) => {
    setLoading(true);

    try {
      await register(values.username, values.password, values.email, values.phone);
      // navigate('/');
      setLoading(false);
      setShowModal(true);
    }
    catch (e) {
      //console.log(e);
      setLoading(false);
      setErrmsg(e.response.data.message);
    }
  };

  return (
    <JWTRegister>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <ContentBox>
              <Stack>
                <JustifyBox p={4} height="100%" sx={{ minWidth: 200 }}>
                  <img src="/assets/images/logo_simple2.png" alt="" width="170px" />
                </JustifyBox>
                <Small sx={{ mt: 2 }}>
                  * 회원 가입 후 OWL 관리자의 최종 승인 후 로그인이 가능합니다. 관리자에게 문의하세요.
                </Small>
              </Stack>
            </ContentBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box p={4} height="100%">
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) =>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="username"
                      label="아이디"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.username}
                      onChange={handleChange}
                      helperText={touched.username && errors.username}
                      error={Boolean(errors.username && touched.username)}
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="비밀번호"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      name="phone"
                      type="text"
                      label="전화번호"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.phone}
                      onChange={handleChange}
                      helperText={touched.phone && errors.phone}
                      error={Boolean(errors.phone && touched.phone)}
                      sx={{ mb: 3 }}

                    />
                    <Paragraph color="red">
                      {errmsg}
                    </Paragraph>

                    <FlexBox gap={1} alignItems="center">
                      <Checkbox
                        size="small"
                        name="remember"
                        onChange={handleChange}
                        checked={values.remember}
                        sx={{ padding: 0 }}
                      />

                      <Paragraph fontSize={13}>
                        I have read and agree to the terms of service.
                      </Paragraph>
                    </FlexBox>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{
                        mb: 2,
                        mt: 3,
                      }}
                    >
                      Register
                    </LoadingButton>

                    <Paragraph>
                      Already have an account?
                      <NavLink
                        to="/session/signin"
                        style={{
                          color: theme.palette.primary.main,
                          marginLeft: 5,
                        }}
                      >
                        Login
                      </NavLink>
                    </Paragraph>
                  </form>
                }
              </Formik>
              <RegisterModal modalhandler={modalHandle} showModal={showModal} />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  );
}
