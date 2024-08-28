import { Grid, Stack } from '@mui/material';
import { Box, styled, Card } from '@mui/material';

import { SimpleCard } from '../../components';
import Calendar from '../../components/Calendar/WorkCalendar';
import CalendarTags from '../../components/CalendarTags';
import QRCodeGenerator from './QRCodeGenerator';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

export default function Home() {
  return (
    <Container>
      <Grid container spacing={3}>
        {/* Left Side: Banner and Calendar */}
        <Grid item xs={12} md={8}>
          <Stack spacing={2} sx={{ height: '100%' }}>
            {/* Banner */}
            <Box
              color="primary"
              sx={{
                height: '300px',
                overflow: 'hidden',
              }} // 배너 높이 제한
            >
              <img
                src="/assets/images/banner.png"
                alt="Banner"
                style={{
                  borderRadius: '15px',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>

            {/* Calendar */}
            <Card
              title="근무 캘린더"
              button="true"
              sx={{
                borderRadius: '15px',
                maxHeight: '500px',
                padding: '20px 20px',
                overflow: 'auto',
              }} // 캘린더 높이 조정
            >
              <Calendar />

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ paddingTop: '20px' }}
              >
                <CalendarTags text="근무완료" color="blue" />
                <CalendarTags text="채용완료" color="orange" />
                <CalendarTags text="채용중" color="gray" />
              </Stack>
            </Card>
          </Stack>
        </Grid>

        {/* Right Side: QR Code */}
        <Grid item xs={12} md={4}>
          {' '}
          {/* 여기에서 xs={12} 및 md={4}로 설정 */}
          <QRCodeGenerator userId={1234} />
        </Grid>
      </Grid>
    </Container>
  );
}
