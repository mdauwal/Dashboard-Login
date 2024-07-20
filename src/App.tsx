import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import { Button, IconButton, Link, Avatar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HelpOutline, PermIdentity, Lock, LockOpen } from "@mui/icons-material";
import Dashboard from './Dashboard';

const SplitScreenGrid = styled('div')(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: "1fr",
  },
}));

const LeftPaneGrid = styled('div')({
  backgroundColor: "#FFFBF7",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "20px",
});

const RightPaneGrid = styled('div')({
  backgroundImage: 'url(bg.jpg)',
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  height: "100%",
});

const Banner = styled('div')({
  backgroundColor: "white",
  position: "absolute",
  bottom: "17px",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "10px 5px",
  textAlign: "center",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  color: "#585858",
  width: "90%",
  height: "60px",
  maxWidth: "550px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const BannerImage = styled('img')({
  marginLeft: "0px",
  marginRight: "10px",
  height: "40px",
  border: "2px solid white",
  flexShrink: 0,
});

const BannerText = styled('div')({
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const TextFieldContainer = styled('div')(({ theme }) => ({
  width: "80%",
  margin: "10px auto",
  [theme.breakpoints.down('md')]: {
    width: "100%",
  },
}));

const StyledTextField = styled(TextField)({
  backgroundColor: "white",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "10px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#AEB1B0",
  cursor: "pointer",
});

const ButtonContainer = styled('div')(({ theme }) => ({
  width: "80%",
  margin: "10px auto",
  paddingBottom: "20px",
  [theme.breakpoints.down('md')]: {
    width: "100%",
  },
}));

const LoginButton = styled(Button)({
  width: "100%",
  textTransform: "none",
});

const Logo = styled('img')(({ theme }) => ({
  width: "60px",
  height: "70px",
  margin: "0 0 20px 70px",
  [theme.breakpoints.down('md')]: {
    margin: "0 auto 20px auto",
  },
}));

const HeadingContainer = styled('div')(({ theme }) => ({
  width: "80%",
  marginLeft: "0px",
  marginRight: "0px",
  paddingLeft: "70px",
  [theme.breakpoints.down('md')]: {
    paddingLeft: "0",
    textAlign: "center",
  },
}));

const Heading = styled('h2')({
  color: "#666869",
  fontWeight: 700,
  fontFamily: "Mulish",
});

const SubHeading = styled('p')({
  color: "#AEB1B0",
  fontSize: "14px",
  fontWeight: 400,
  fontFamily: "Mulish",
  marginTop: "-20px",
});

const HelpOutlineStyled = styled('h5')({
  color: "white",
  textAlign: "right",
  paddingRight: "20px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: "10px"
});

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const dashboardClick = () => {
    navigate('/dashboard');
  };

  return (
    <SplitScreenGrid>
      <LeftPaneGrid>
        <Logo src="logo.jpg" alt="Leadway Logo" />
        <HeadingContainer>
          <Heading>Underwriter Dashboard</Heading>
          <SubHeading>Welcome. Login to your portal account.</SubHeading>
        </HeadingContainer>
        <TextFieldContainer>
          <StyledTextField
            label="Login ID"
            variant="filled"
            placeholder="Enter your Login ID"
            fullWidth
            InputProps={{
              endAdornment: <PermIdentity />,
              disableUnderline: true,
              style: {
                color: "#AEB1B0",
                padding: "10px",
              },
            }}
            InputLabelProps={{
              style: {
                color: "black",
              },
            }}
            focused
          />
        </TextFieldContainer>

        <TextFieldContainer>
          <StyledTextField
            label="Password"
            variant="filled"
            placeholder="Enter your password"
            fullWidth
            type={isVisible ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ color: '#FF7A00' }}>show</span>
                  <IconButton onClick={handleToggleVisibility} style={{ color: "#AFB0B1", marginTop: '-8px' }}>
                    {isVisible ? <LockOpen /> : <Lock />}
                  </IconButton>
                </div>
              ),
              disableUnderline: true,
              style: {
                color: "#AEB1B0",
                padding: "10px",
              },
            }}
            InputLabelProps={{
              style: {
                color: "black",
              },
            }}
            focused
          />
        </TextFieldContainer>

        <div style={{ display: "flex", justifyContent: "space-between", width: "80%", margin: "10px auto" }}>
          <StyledLink href="#" variant="body2">
            Keep me logged in
          </StyledLink>
          <StyledLink href="#" variant="body2">
            Reset password
          </StyledLink>
        </div>

        <ButtonContainer>
          <LoginButton variant="contained" color="warning" onClick={dashboardClick}>
            Login
          </LoginButton>
        </ButtonContainer>
      </LeftPaneGrid>
      <RightPaneGrid>
        <HelpOutlineStyled>
          <HelpOutline style={{ marginRight: '8px' }} />
          Need help?
        </HelpOutlineStyled>
        <Banner>
          <BannerImage src="group.png" alt="Avatar" />
          <BannerText>
            <Typography variant="body2">
              <h4 style={{ margin: 0 }}>Customer Management</h4>
              <p style={{ margin: 0, fontSize: "12px" }}>Manage all customers from individual customers to corporate or group customers</p>
            </Typography>
          </BannerText>
        </Banner>
      </RightPaneGrid>
    </SplitScreenGrid>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
