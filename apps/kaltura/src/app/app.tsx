import styled from '@emotion/styled';
import { ThemeProvider } from '@kep-ui-kit/ui-theme';
import {ReactComponent as Logo}  from './logo.svg';
import { Typography, Button  } from '@kep-ui-kit/ui-components';
const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <ThemeProvider>
        <Logo></Logo>
        <Typography variant='h2'>Kaltura Blackboard BuildingBlock - Plugin Download</Typography>
        <Typography variant='body1'>Click the button below to go to the releases page in github.</Typography>
        <Typography variant='body1'>Download the .war file from the latest release that is listed there.</Typography>
        <Button href="https://github.com/kaltura/kaltura-blackboard-plugin-releases/releases">Download</Button>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
