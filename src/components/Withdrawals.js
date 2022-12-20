import { useState } from 'react';
import Heading from './Heading';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// This is a component named Withdrawals
function Withdrawals(props) {
  // TODO: Track the amount being withdrawn in the state
  const [withdrawlAmount, setWithdrawlAmount] = useState(0);

  const onFieldChange = (evt) => {
    let newAmount = parseInt(evt.target.value);
    
    //Is this in the right place?
if (newAmount >=0) {
  setWithdrawlAmount(newAmount);
}
  
}
  // Click handler for button
  const handleWithdrawl = () => {
    props.updateBalance(-1*withdrawlAmount);
  
  //reset the field
  setWithdrawlAmount(0)
  
}
  // If the amount is less than the balance, user can withdraw
// Uncomment once we have a state variable for amount  
//
let canWithdraw = true;//Is this in the right place?
  
if (withdrawlAmount > props.balance) {//Is this in the right place?
         canWithdraw = false;//Is this in the right place?
    }

  return (
    <Box>
      <Heading text="Withdraw Funds" type="h3" />
      <Stack spacing={2} direction="row" justifyContent="center" alignItems={"center"}>
          <TextField
          type="number"
          label="Withdrawl Amount"
          value={withdrawlAmount}
          onChange={onFieldChange}
/>
<Button
  variant='outlined'
  size="small"
  onClick={handleWithdrawl}
  disabled={canWithdraw===false}
  >
    Withdrawl
  </Button>
</Stack>
{canWithdraw === false ? (
  <Alert severity='warning' sx={{ mt: 2 }}>
     Insufficient funds for Withdrawal
 </Alert>
        ) : null}
</Box>
  );
}

export default Withdrawals;
//{/* If canWithdraw is FALSE, show the Alert */}
//     
 //   </Box>
 // );
//}
  

