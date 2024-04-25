import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginPage from './pages/login/index.jsx';
import SignupPage from './pages/signup/index.jsx';
import DashboardPage from './pages/dashboard/index.jsx';

// MUI Theme
const defaultTheme = createTheme();

function App() {
  useEffect(() => {
    document.title = "School Assist App"; // Set the new tab name
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
