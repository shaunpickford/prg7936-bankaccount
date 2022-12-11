import Heading from './Heading';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { useStepContext } from '@mui/material';

// This is a component named Withdrawals
function Withdrawals(props) {
  // TODO: Track the amount being withdrawn in the state
Const [withdrawAmount, setWithdrawAmount] = useState(0);
return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 20)}>
      Click me
    </button>
  </div>
)

  // If the amount is less than the balance, user can withdraw
  
  let canWithdraw = true;
  // Uncomment once we have a state variable for amount
  /*if (amount > props.balance) {
      canWithdraw = false;
  }*/

  return (
    <Box>
      <Heading text="Withdraw Funds" type="h3" />

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