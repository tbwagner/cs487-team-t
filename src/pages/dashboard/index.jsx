import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ListItem from '@mui/material/ListItem';
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Chart from './Chart';
import Deposits from './NextAssignment';
import Orders from './RecentGrades';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ComputerIcon from '@mui/icons-material/Computer';
import CalculateIcon from '@mui/icons-material/Calculate';
import ScienceIcon from '@mui/icons-material/Science';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PsychologyIcon from '@mui/icons-material/Psychology';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      CS 487 Team T - Spring 2024
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const courses = [
  {
    title: 'CS 101',
    instructor: 'John Doe',
    description: 'Fundamentals of computers. Introductory course.',
    credits: 3,
    schedule: 'MWF 9:00 AM - 10:00 AM',
  },
  {
    title: 'EE 101',
    instructor: 'Jane Smith',
    description: 'Basics in electrical engineering. Introductory course.',
    credits: 3,
    schedule: 'TTh 10:30 AM - 12:00 PM',
  },
  {
    title: 'ARCH 101',
    instructor: 'Michael Johnson',
    description: 'Principles of architecture. Introductory course.',
    credits: 3,
    schedule: 'MWF 1:00 PM - 2:30 PM',
  },
  {
    title: 'PSYC 101',
    instructor: 'Emily Davis',
    description: 'Basic principles of psychology. Introductory course.',
    credits: 3,
    schedule: 'TTh 9:00 AM - 10:30 AM',
  },
  {
    title: 'BIO 101',
    instructor: 'David Wilson',
    description: 'Basic concepts in biology. Introductory course.',
    credits: 4,
    schedule: 'MWF 11:00 AM - 12:30 PM',
  },
  {
    title: 'BUS 101',
    instructor: 'Sarah Thompson',
    description: 'Fundamental principles of business. Introductory course.',
    credits: 3,
    schedule: 'TTh 1:00 PM - 2:30 PM',
  },
];

const calendarEvents = [
  {
    title: 'CS 101 Final Exam',
    date: 'Monday, April 29, 2024',
    location: 'Exam Hall A',
    description: 'Final exam for CS 101 course.',
  },
  {
    title: 'EE 101 Final Exam',
    date: 'Tuesday, April 30, 2024',
    location: 'Exam Hall B',
    description: 'Final exam for EE 101 course.',
  },
  {
    title: 'ARCH 101 Final Exam',
    date: 'Wednesday, May 1, 2024',
    location: 'Exam Hall C',
    description: 'Final exam for ARCH 101 course.',
  },
  {
    title: 'PSYC 101 Final Exam',
    date: 'Thursday, May 2, 2024',
    location: 'Exam Hall D',
    description: 'Final exam for PSYC 101 course.',
  },
  {
    title: 'BIO 101 Final Exam',
    date: 'Friday, May 3, 2024',
    location: 'Exam Hall E',
    description: 'Final exam for BIO 101 course.',
  },
  {
    title: 'BUS 101 Final Exam',
    date: 'Monday, April 29, 2024',
    location: 'Exam Hall F',
    description: 'Final exam for BUS 101 course.',
  },
];

const studyGroups = [
  {
    name: 'Study Group 1',
    subject: 'Mathematics',
    time: 'Monday, 10:00 AM - 12:00 PM',
    location: 'Room 101',
    members: ['Alice', 'Bob', 'Charlie']
  },
  {
    name: 'Study Group 2',
    subject: 'Physics',
    time: 'Wednesday, 2:00 PM - 4:00 PM',
    location: 'Room 202',
    members: ['David', 'Emily', 'Frank']
  },
  {
    name: 'Study Group 3',
    subject: 'Biology',
    time: 'Friday, 3:00 PM - 5:00 PM',
    location: 'Room 303',
    members: ['Grace', 'Henry', 'Ivy']
  },
  {
    name: 'Study Group 4',
    subject: 'History',
    time: 'Tuesday, 1:00 PM - 3:00 PM',
    location: 'Room 404',
    members: ['James', 'Katherine', 'Liam']
  },
  {
    name: 'Study Group 5',
    subject: 'Computer Science',
    time: 'Thursday, 9:00 AM - 11:00 AM',
    location: 'Room 505',
    members: ['Mia', 'Noah', 'Olivia']
  }
];

const contentItems = [
  {
    title: 'Lecture Slides',
    files: [
      { name: 'Introduction to React.pdf' },
      { name: 'State Management in Redux.pdf' },
      // Add more lecture slides as needed
    ]
  },
  {
    title: 'Assignments',
    files: [
      { name: 'Assignment 1.docx' },
      { name: 'Assignment 2.docx' },
      // Add more assignments as needed
    ]
  },
  // Add more content items as needed
];

const settings = [
  {
    name: 'Privacy Setting 1',
    description: 'Description of privacy setting 1',
    action: () => {
      // Action for privacy setting 1
    }
  },
  {
    name: 'Privacy Setting 2',
    description: 'Description of privacy setting 2',
    action: () => {
      // Action for privacy setting 2
    }
  },
  // Add more privacy settings as needed
];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [showSearch, setShowSearch] = React.useState(false);
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [showStudyGroups, setShowStudyGroups] = React.useState(false);
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showSupport, setShowSupport] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);
  const [dialogContent, setDialogContent] = React.useState('');
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleClickSearchCourses = () => {
    setShowSearch(!showSearch);
    setShowCalendar(false);
    setShowStudyGroups(false);
    setShowFeedback(false);
    setShowContent(false);
    setShowSettings(false);
    setShowSupport(false);
  };

  const handleClickCalendar = () => {
    setShowCalendar(!showCalendar);
    setShowSearch(false);
    setShowStudyGroups(false);
    setShowFeedback(false);
    setShowContent(false);
    setShowSettings(false);
    setShowSupport(false);
  };

  const handleClickStudyGroups = () => {
    setShowStudyGroups(!showStudyGroups);
    setShowSearch(false);
    setShowCalendar(false);
    setShowFeedback(false);
    setShowContent(false);
    setShowSettings(false);
    setShowSupport(false);
  };

  const handleClickFeedback = () => {
    setShowFeedback(!showFeedback);
    setShowSearch(false);
    setShowCalendar(false);
    setShowContent(false);
    setShowStudyGroups(false);
    setShowSettings(false);
    setShowSupport(false);
  };

  const handleClickSettings = () => {
    setShowSettings(!showSettings);
    setShowSearch(false);
    setShowCalendar(false);
    setShowFeedback(false);
    setShowStudyGroups(false);
    setShowSupport(false);
    setShowContent(false);
  };

  const handleClickSupport = () => {
    setShowSupport(!showSupport);
    setShowSearch(false);
    setShowCalendar(false);
    setShowFeedback(false);
    setShowStudyGroups(false);
    setShowSettings(false);
    setShowContent(false);
  };

  const handleClickContent = () => {
    setShowContent(!showContent);
    setShowSearch(false);
    setShowCalendar(false);
    setShowStudyGroups(false);
    setShowFeedback(false);
    setShowSettings(false);
    setShowSupport(false);
  };

  const handleDialog = (content) => {
    setDialogContent(content);
    setDialogOpen(true);
  };  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              School Assist App Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <React.Fragment>
              <ListItemButton onClick={handleClickSearchCourses}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search Courses" />
              </ListItemButton>
              <ListItemButton onClick={handleClickCalendar}>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItemButton>
              <ListItemButton onClick={handleClickStudyGroups}>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Study Groups" />
              </ListItemButton>
              <ListItemButton onClick={handleClickFeedback}>
                <ListItemIcon>
                  <CommentIcon />
                </ListItemIcon>
                <ListItemText primary="Course Feedback" />
              </ListItemButton>
              <ListItemButton onClick={handleClickContent}>
                <ListItemIcon>
                  <DownloadIcon />
                </ListItemIcon>
                <ListItemText primary="Content" />
              </ListItemButton>
              <ListItemButton onClick={handleClickSettings}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
              <ListItemButton onClick={handleClickSupport}>
                <ListItemIcon>
                  <SupportAgentIcon />
                </ListItemIcon>
                <ListItemText primary="Support" />
              </ListItemButton>
            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
              <ListSubheader component="div" inset>
                Enrolled Courses
              </ListSubheader>
              <ListItemButton>
                <ListItemIcon>
                  <ComputerIcon />
                </ListItemIcon>
                <ListItemText primary="CS 201" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <CalculateIcon />
                </ListItemIcon>
                <ListItemText primary="MATH 151" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <ScienceIcon />
                </ListItemIcon>
                <ListItemText primary="CHEM 124" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary="LIT 306" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <PsychologyIcon />
                </ListItemIcon>
                <ListItemText primary="PSYC 221" />
              </ListItemButton>
            </React.Fragment>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {!showSearch && !showCalendar && !showStudyGroups && !showContent && !showSupport && !showFeedback && !showSettings && (
                <>
                  {/* Chart */}
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                      }}
                    >
                      <Chart />
                    </Paper>
                  </Grid>
                  {/* Recent Deposits */}
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                      }}
                    >
                      <Deposits />
                    </Paper>
                  </Grid>
                  {/* Recent Orders */}
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Orders />
                    </Paper>
                  </Grid>
                </>
              )}
              {showSearch && (
                courses.map((course, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {course.title}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Instructor: {course.instructor}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Description: {course.description}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Credits: {course.credits}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Schedule: {course.schedule}
                      </Typography>
                      <Button variant="contained" color="primary" onClick={() => handleDialog('You have enrolled in ' + course.title)}>
                        Enroll
                      </Button>
                    </Paper>
                  </Grid>
                ))
              )}
              {showCalendar && (
                calendarEvents.map((event, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {event.title}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Date: {event.date}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Location: {event.location}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Description: {event.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))
              )}
              {showStudyGroups && (
                <>
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        Create a New Study Group
                      </Typography>
                      <Button variant="contained" color="primary">
                        Create Group
                      </Button>
                    </Paper>
                  </Grid>
                  {studyGroups.map((group, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 240,
                        }}
                      >
                        <Typography variant="h5" gutterBottom>
                          {group.name}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          Subject: {group.subject}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          Time: {group.time}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Location: {group.location}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Members: {group.members.join(', ')}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => handleDialog('You have requested to join ' + group.name)}>
                          Join Group
                        </Button>
                      </Paper>
                    </Grid>
                  ))}
                </>
              )}
              {showFeedback && (
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    Course Feedback
                  </Typography>
                  <FormControl fullWidth sx={{ mb: 2 }}> {/* Add margin bottom for spacing */}
                    <InputLabel id="course-select-label">Select Course</InputLabel>
                    <Select
                      labelId="course-select-label"
                      id="course-select"
                      value={'CS 201'} // Set the value to the selected course
                      label="Select Course"
                    >
                      <MenuItem value={'CS 201'}>CS 201</MenuItem>
                      <MenuItem value={'MATH 151'}>MATH 151</MenuItem>
                      <MenuItem value={'CHEM 124'}>CHEM 124</MenuItem>
                      <MenuItem value={'LIT 306'}>LIT 306</MenuItem>
                      <MenuItem value={'PSYC 221'}>PSYC 221</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="feedback"
                    label="Enter your feedback"
                    multiline
                    rows={8} // Increased number of rows for larger input area
                    variant="outlined"
                    sx={{ mb: 2 }} // Add margin bottom for spacing
                  />
                  <Button variant="contained" color="primary" onClick={() => handleDialog('You have submitted feedback for CS 201')}>
                    Submit Feedback
                  </Button>
                </Paper>
              )}
              {showContent && (
                <>
                  {/* Map through the content items and render them */}
                  {contentItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" gutterBottom>
                          {item.title}
                        </Typography>
                        {/* Render each content item */}
                        {item.files.map((file, idx) => (
                          <ListItem button key={idx}>
                            <ListItemIcon>
                              <AttachFileIcon />
                            </ListItemIcon>
                            <ListItemText primary={file.name} />
                          </ListItem>
                        ))}
                      </Paper>
                    </Grid>
                  ))}
                </>
              )}
              {showSettings && (
                <>
                  {/* Map through settings array and render privacy settings */}
                  {settings.map((setting, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 240,
                        }}
                      >
                        <Typography variant="h5" gutterBottom>
                          {setting.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          {setting.description}
                        </Typography>
                        <Switch
                          checked={true}
                          inputProps={{ 'aria-label': setting.name }}
                        />
                      </Paper>
                    </Grid>
                  ))}
                </>
              )}
              {showSupport && (
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <Typography variant="h6" gutterBottom>
                    Support Desk
                  </Typography>
                  <FormControl fullWidth sx={{ mb: 2 }}> {/* Add margin bottom for spacing */}
                    <InputLabel id="course-select-label">Choose One</InputLabel>
                    <Select
                      labelId="course-select-label"
                      id="course-select"
                      value={'General Inquiry'} // Set the value to the selected course
                      label="Select Course"
                    >
                      <MenuItem value={'General Inquiry'}>General Inquiry</MenuItem>
                      <MenuItem value={'Technical Support'}>Technical Support</MenuItem>
                      <MenuItem value={'Account Assistance'}>Account Assistance</MenuItem>
                      <MenuItem value={'Product Feedback/Suggestions'}>Product Feedback/Suggestions</MenuItem>
                      <MenuItem value={'PSYC 221'}>PSYC 221</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="feedback"
                    label="Enter your inquiry"
                    multiline
                    rows={8} // Increased number of rows for larger input area
                    variant="outlined"
                    sx={{ mb: 2 }} // Add margin bottom for spacing
                  />
                  <Button variant="contained" color="primary" onClick={() => handleDialog('You have submitted a support ticket.')}>
                    Submit Feedback
                  </Button>
                </Paper>
              )}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogContent>
              <Typography variant="body1">{dialogContent}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </ThemeProvider>
  );
}