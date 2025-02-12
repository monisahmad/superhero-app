import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useSWR from 'swr';

const SuperHeroTable = ({data, isLoading, error}) => {
  // Fetching data using SWR
 

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Failed to load data {error.message}</div>;

  return (
    <Paper>
    <TableContainer component={Paper} sx={{ marginTop: 4, padding: 4, width: 'auto' }}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Superpower</TableCell>
            <TableCell align="right">Humility Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Only render data when it is available */}
          {data && data.length > 0 ? (
            data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.superpower}</TableCell>
                <TableCell align="right">{row.humilityScore}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No superheroes available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer></Paper>
  );
};

export default SuperHeroTable;
