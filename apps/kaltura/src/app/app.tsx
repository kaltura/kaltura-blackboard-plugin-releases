import styled from '@emotion/styled';
import { ThemeProvider } from '@kep-ui-kit/ui-theme';
import {ReactComponent as Logo}  from './logo.svg';
import { Typography, Table, TableContainer, TableHead, TableCell, TableRow, TableBody, Button  } from '@kep-ui-kit/ui-components';
const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <ThemeProvider>
        <Logo></Logo>
        <Typography variant='h1'>Kaltura Releases - Download Page</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Releases Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Blackboard</TableCell>
                <TableCell><Button href="https://github.com/kaltura/releases/tree/blackboard-releases">Download</Button></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
