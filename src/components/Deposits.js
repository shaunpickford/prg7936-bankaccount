// import useState
import { useState } from 'react';
import Heading from './Heading';

import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// This is a component named Deposits
// This component expects props of: balance (number), updateBalance (function)
function Deposits(props) {
  const [depositAmount, setDepositAmount] = useState(0);

  const onFieldChange = (evt) => {
    // gives us the data in the field
    let newAmount = parseInt(evt.target.value);

    if (newAmount >= 0) {
      setDepositAmount(newAmount);
    }
  }

  // Click handler for button
  const handleDeposit = () => {
    props.updateBalance(depositAmount);

    // Reset the field
    setDepositAmount(0);
  }

  return (
    <Box>
      <Heading text="Deposit Funds" type="h3" />
      <Stack spacing={2} direction="row" justifyContent="center" alignItems={"center"}>
          <TextField
            type="number"
            label="Deposit Amount"
            value={depositAmount}
            onChange={onFieldChange}
          />
          <Button
            variant="outlined"
            size="small"
            onClick={handleDeposit}
          >
              Deposit
          </Button>
      </Stack>
    </Box>
  );
}
  
export default Deposits;