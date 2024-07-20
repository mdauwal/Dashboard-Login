import React from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Container,
  Typography,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Avatar
} from '@mui/material';
import {
  Add as AddIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Home as HomeIcon,
  List as ListIcon,
  Group as GroupIcon,
  Settings as SettingsIcon,
  HelpOutline as HelpOutlineIcon,
} from '@mui/icons-material';
import { styled } from '@mui/system';

const Sidebar = styled(Box)({
  width: 80,
  backgroundColor: '#333',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 20,
});

const LogoColumn = styled(Box)({
  width: 50,
  backgroundColor: 'white',
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const MenuContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 10,
});

const MainContent = styled(Box)({
  flex: 1,
  padding: 20,
  backgroundColor: 'white',
  overflowY: 'auto',
  marginTop: 50,
});

const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
});

const Content = styled(Box)({
  display: 'flex',
  gap: 20,
  alignItems: 'stretch',
});

const Cards = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 20,
  flex: 2,
});

const CardStyled = styled(Card)({
  height: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
  cursor: 'pointer',
  padding: 20,
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  flexDirection: 'column',
});

const Activity = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  borderRadius: 5,
  padding: 20,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const TableContainerStyled = styled(TableContainer)({
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 5,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginTop: 20,
});

const TopBar = styled(AppBar)({
  width: '100%',
  height: 50,
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0 20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: 0,
  zIndex: 1000,
});

const Dashboard: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <TopBar position="fixed">
        <Toolbar>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton
            color="inherit"
            edge="end"
            aria-label="account"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </TopBar>
      <Container sx={{ display: 'flex', height: 'calc(100vh - 50px)', marginTop: 50 }}>
        <Sidebar>
          <IconButton>
            <HomeIcon style={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <ListIcon style={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <GroupIcon style={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <SettingsIcon style={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <HelpOutlineIcon style={{ color: 'white' }} />
          </IconButton>
        </Sidebar>
        <LogoColumn>
          <div>
            <img src="logo2.png" alt="Logo" />
          </div>
          <Typography variant="h4">TRM</Typography>
          <MenuContainer>
            <Button startIcon={<HomeIcon />}>Overview</Button>
            <Button startIcon={<ListIcon />}>Requests</Button>
          </MenuContainer>
        </LogoColumn>
        <MainContent>
          <Header>
            <div>
              <Typography variant="h4">Welcome, Auwal</Typography>
              <Typography variant="body1">Take a look at your dashboard and see all pending tasks</Typography>
            </div>
            <Button variant="contained" color="primary" startIcon={<AddIcon />}>
              Create New Inspection
            </Button>
          </Header>
          <Content>
            <Cards>
              <CardStyled>
                <CardContent>
                  <Typography variant="h5" color="primary">All Requests</Typography>
                  <Typography variant="h2">32</Typography>
                </CardContent>
              </CardStyled>
              <CardStyled>
                <CardContent>
                  <Typography variant="h5" color="success">Completed Requests</Typography>
                  <Typography variant="h2">114</Typography>
                </CardContent>
              </CardStyled>
              <CardStyled>
                <CardContent>
                  <Typography variant="h5" color="warning">Ongoing Requests</Typography>
                  <Typography variant="h2">19</Typography>
                </CardContent>
              </CardStyled>
              <CardStyled>
                <CardContent>
                  <Typography variant="h5" color="error">Delayed Requests</Typography>
                  <Typography variant="h2">19</Typography>
                </CardContent>
              </CardStyled>
            </Cards>
            <Activity>
              <Typography variant="h6">Activity</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Activity</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>You have a property inspection coming up in three days</TableCell>
                      <TableCell><a href="#">Set Reminder</a></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mustapha Onosanya sent a new property</TableCell>
                      <TableCell><a href="#">See Inspection</a></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Your scheduled inspection for GIG Logistics is three days overdue</TableCell>
                      <TableCell><a href="#">View Inspection</a></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Inspection complete for Saad Funtua</TableCell>
                      <TableCell><a href="#">View Inspection</a></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Maryam Okasha sent a reminder for Riverheight homes</TableCell>
                      <TableCell><a href="#">View Inspection</a></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Activity>
          </Content>
          <TableContainerStyled>
            <Typography variant="h6">Created Inspections</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Class</TableCell>
                    <TableCell>Inspection Method</TableCell>
                    <TableCell>Officer</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1032</TableCell>
                    <TableCell>GIS Logistics</TableCell>
                    <TableCell>Marine</TableCell>
                    <TableCell>Digital</TableCell>
                    <TableCell>Mustapha Onosanya</TableCell>
                    <TableCell>Quote Request</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1032</TableCell>
                    <TableCell>Shoprite Stores</TableCell>
                    <TableCell>Property</TableCell>
                    <TableCell>Manual</TableCell>
                    <TableCell>Mustapha Onosanya</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1032</TableCell>
                    <TableCell>Abdatan Adebiyi</TableCell>
                    <TableCell>Marine</TableCell>
                    <TableCell>Digital</TableCell>
                    <TableCell>Mustapha Onosanya</TableCell>
                    <TableCell>Pending</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1032</TableCell>
                    <TableCell>René Agyei</TableCell>
                    <TableCell>Agro</TableCell>
                    <TableCell>Manual</TableCell>
                    <TableCell>Mustapha Onosanya</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1032</TableCell>
                    <TableCell>Abdatan Adebiyi</TableCell>
                    <TableCell>Bond</TableCell>
                    <TableCell>Digital</TableCell>
                    <TableCell>Mustapha Onosanya</TableCell>
                    <TableCell>Like Expired</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1032</TableCell>
                    <TableCell>Abdatan Adebiyi</TableCell>
                    <TableCell>Marine</TableCell>
                    <TableCell>Digital</TableCell>
                    <TableCell>Mustapha Onosanya</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1032</TableCell>
                    <TableCell>Abdatan Adebiyi</TableCell>
                    <TableCell>Agro</TableCell>
                    <TableCell>Manual</TableCell>
                    <TableCell>Mustapha Onosanya</TableCell>
                    <TableCell>Pending</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainerStyled>
        </MainContent>
      </Container>
    </Box>
  );
};

export default Dashboard;
