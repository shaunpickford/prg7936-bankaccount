// TODO: Import useState
import Heading from './Heading';

import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// This is a component named Deposits
// This component expects props of: balance (number), updateBalance (function)
function Deposits(props) {

  // TODO: Click handler for button

  return (
    <Box>
      <Heading text="Deposit Funds" type="h3" />
      <Stack spacing={2} direction="row" justifyContent="center" alignItems={"center"}>
          <TextField type="number" label="Deposit Amount" />
          <Button
            variant="outlined"
            size="small"
          >
              Deposit
          </Button>
      </Stack>
    </Box>
  );
}
  
export default Deposits;