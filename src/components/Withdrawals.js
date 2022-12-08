import Heading from './Heading';
import {useState} from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';

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
  const onFieldChange = (evt) => {
    let newAmount = parseInt(evt.target.value);
  
  if (newAmount >=0) {
    setWithdrawAmount(newAmount);
  }
}

  const handleWithdraw = () => {
    props.updateBalance(withdrawAmount);
    
    setWithdrawAmount(0);
  }

  return (
    <Box>
      <Heading text="Withdraw Funds" type="h3" />
          <TextField
            type="number"
            label="Withdraw Amount"
            value={withdrawAmount}
            onChange={onFieldChange}
          />
          <Button
            variant="outlined"
            size="small"
            onClick={handleWithdraw}
          >
              Withdraw
          </Button>
    </Box>
  );
}
  
export default Withdrawals;