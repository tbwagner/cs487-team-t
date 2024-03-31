import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Recent Grades Data
function createData(subject, grade) {
  return { subject, grade };
}

const recentGrades = [
  createData('Mathematics', 'A'),
  createData('Science', 'B+'),
  createData('History', 'A-'),
  createData('English', 'B'),
  createData('Computer Science', 'A'),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function RecentGrades() {
  return (
    <React.Fragment>
      <Title>Recent Grades</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recentGrades.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more grades
      </Link>
    </React.Fragment>
  );
}
