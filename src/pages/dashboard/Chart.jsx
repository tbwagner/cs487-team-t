import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts';

import Title from './Title';

// Generate GPA Data
function createData(semester, gpa) {
  return { semester, gpa: gpa ?? null };
}

const data = [
  createData('Semester 1', 3.5),
  createData('Semester 2', 3.8),
  createData('Semester 3', 3.9),
  createData('Semester 4', 3.7),
  createData('Semester 5', 3.6),
  createData('Semester 6', 3.9),
  createData('Semester 7', 4.0),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>GPA Over Time</Title>
      <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
        <LineChart
          dataset={data}
          margin={{
            top: 16,
            right: 20,
            left: 70,
            bottom: 30,
          }}
          xAxis={[
            {
              scaleType: 'point',
              dataKey: 'semester',
              tickNumber: 2,
              tickLabelStyle: theme.typography.body2,
            },
          ]}
          yAxis={[
            {
              label: 'GPA',
              labelStyle: {
                ...theme.typography.body1,
                fill: theme.palette.text.primary,
              },
              tickLabelStyle: theme.typography.body2,
              max: 4.0, // Assuming GPA scale is from 0 to 4.0
              min: 0,
              tickNumber: 5, // Adjust as needed
            },
          ]}
          series={[
            {
              dataKey: 'gpa',
              showMark: false,
              color: theme.palette.primary.light,
            },
          ]}
          sx={{
            [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
            [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: 'translateX(-25px)',
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
