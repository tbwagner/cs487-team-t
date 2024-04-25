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
  createData('Computer Science 201: Accelerated Introduction to Computer Science', 'A'),
  createData('Mathematics 151: Calculus I', 'B+'),
  createData('Chemistry 124: Principles of Chemistry I with Laboratory', 'A-'),
  createData('Literature 306: Science Fiction', 'B'),
  createData('Psychology 221: Introduction to Psychological Science', 'A'),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function RecentGrades() {
  return (
    <React.Fragment>
      <Title>Current Grades</Title>
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
    </React.Fragment>
  );
}
