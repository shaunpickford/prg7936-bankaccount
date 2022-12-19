import { useState } from 'react';

import Heading from './Heading';

import {
  Alert,
  Box,
  Button,
  Stack,
  TextField
} from '@mui/material';

// This is a component named Withdrawals
function Withdrawals(props) {
  // Track the amount being withdrawn in the state
  const [withdrawAmount, setWithdrawAmount] = useState(888);

  // what to do when the user changes the Withdrawal Amount field
  const onFieldChange = (evt) => {
    let amt = evt.target.value; // value from the field
    setWithdrawAmount(amt); // update state
  }

  // what to do when the user clicks the button
  const handleWithdrawal = () => {
    let negativeAmount = withdrawAmount * -1;
    props.updateBalance(negativeAmount);
  }

  // If the amount is less than the balance, user can withdraw
  
  let canWithdraw = true;
  // Uncomment once we have a state variable for amount
  if (withdrawAmount > props.balance) {
      canWithdraw = false;
  }

  return (
    <Box>
      <Heading text="Withdraw Funds" type="h3" />

      <Stack spacing={2} direction="row" justifyContent="center" alignItems={"center"}>
        <TextField
          type="number"
          label="Withdraw Amount"
          value={withdrawAmount}
          onChange={onFieldChange}
        />
        <Button
          variant="outlined"
          size="small"
          onClick={handleWithdrawal}
          disabled={canWithdraw === false}
        >
          Withdraw
        </Button>
      </Stack>
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