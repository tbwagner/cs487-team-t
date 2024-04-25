import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function NextAssignment() {
  return (
    <React.Fragment>
      <Title>Next Assignment</Title>
      <Typography component="p" variant="h4">
        Team Final Report
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        April 26, 2024
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Assignment
        </Link>
      </div>
    </React.Fragment>
  );
}
