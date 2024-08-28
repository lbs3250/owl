import { LoadingButton } from '@mui/lab';
import { Card, Grid, TextField } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Paragraph, Tiny } from '../../components/Typography';
import useAuth from '../../hooks/useAuth';

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  backgroundImage: 'url(\'/assets/images/home-bg.png\')',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 500,
    minHeight: 350,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

const initialValues = {
  username: '',
  password: '',
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Password must be 4 character length')
    .required('Password is required!'),
  // email: Yup.string().email('Invalid Email address').required('Email is required!'),  // 필드에 없으면 반드시 지울것.
  username: Yup.string().required('username is required!'),
});

const JwtLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errmsg, setErrmsg] = useState('');

  const { login } = useAuth();

  // const handleFormSubmit = async (values) => {
  //   setLoading(true);
  //   try {
  //     setErrmsg('');
  //     // await login(values.username, values.password);
  //     setLoading(false);
  //     if (values.username === 'owl' && values.password === '123456') {
  //       navigate('/store-manage-menu/management-home');
  //     }
  //     else {
  //       setErrmsg('관리자에게문의');
  //     }
  //   }
  //   catch (e) {
  //     setLoading(false);
  //     setErrmsg(e.response.data.error);
  //   }
  // };

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      setErrmsg('');
      // 서버에 로그인 요청을 보냅니다. axios 인스턴스를 사용하여 /v1/auth/login 엔드포인트로 요청을 보냅니다.
      await login(values.username, values.password);

      setLoading(false);
      // 로그인 성공 시, 서버에서 전달받은 accessToken을 사용하여 사용자 정보를 업데이트합니다.

      // 로그인 후 이동할 페이지를 설정합니다.
      navigate('/');
    }
    catch (error) {
      setLoading(false);
      if (error.response) {
        setErrmsg(error.response.data.message); // 서버에서 반환한 오류 메시지를 표시합니다.
      }
      else {
        setErrmsg('서버와의 통신 중 오류가 발생했습니다.'); // 네트워크 오류 등의 경우
      }
    }
  };

  // const handleFormSubmit_debug = (values) => {
  //   setTimeout(() => {
  //     alert(JSON.stringify(values));
  //   }, 400);
  // };

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={12} xs={12}>
            <JustifyBox p={2} height="100%" sx={{ minWidth: 200 }}>
              <img src="/assets/images/logo_simple2.png" alt="" width="170px" />
            </JustifyBox>
          </Grid>

          <Grid item sm={12} xs={12}>
            <ContentBox>
              <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) =>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="username"
                      label="ID"
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
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 1.5 }}
                    />

                    <Paragraph color="red">{ errmsg }</Paragraph>

                    {/* <FlexBox justifyContent="flex-end">
                      <NavLink
                        to="/session/forgot-password"
                        style={{ color: theme.palette.primary.main }}
                      >
                        Forgot password?
                      </NavLink>
                    </FlexBox> */}

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ my: 2 }}
                    >
                      Login
                    </LoadingButton>

                    <Paragraph>
                      Don't have an account?
                      <NavLink
                        to="/session/signup"
                        style={{
                          color: theme.palette.primary.main,
                          marginLeft: 5,
                        }}
                      >
                        Register
                      </NavLink>
                    </Paragraph>
                    <FlexBox>

                      <Tiny display="block" textAlign="center" >
                          COPYRIGHT © OWL ALL RIGHTS RESERVED.
                      </Tiny>
                    </FlexBox>
                  </form>
                }
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default JwtLogin;
