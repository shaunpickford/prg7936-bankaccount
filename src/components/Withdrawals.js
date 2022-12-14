import Heading from './Heading';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { useStepContext } from '@mui/material';
import { useState } from 'react';

// This is a component named Withdrawals
function Withdrawals(props) {
  // TODO: Track the amount being withdrawn in the state
const [withdrawAmount, setWithdrawAmount] = useState(0);


  // If the amount is less than the balance, user can withdraw
  
  let canWithdraw = true;
  // Uncomment once we have a state variable for amount
  /*if (amount > props.balance) {
      canWithdraw = false;
  }*/
  
  return (
    <Box>
      <Heading text="Withdraw Funds" type="h3" />

      <TextField
            type="number"
            label="withdraw Amount"
            value={withdrawAmount}
            onChange={onFieldChange}
          />
          <Button
            variant="outlined"
            size="small"
            onClick={handlewithdrawal}
          >
              withdraw
          </Button>
      {/* If canWithdraw is FALSE, show the Alert */}
      {canWithdraw === false ? (
          <Alert severity='warning' sx={{ mt: 2 }}>
              Insufficient funds for Withdrawal
          </Alert>
      ) : null}
    </Box>
  );
}
  
export default Withdrawals;