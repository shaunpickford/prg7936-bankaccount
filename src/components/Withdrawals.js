import Heading from './Heading';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

// This is a component named Withdrawals
function Withdrawals(props) {
  // TODO: Track the amount being withdrawn in the state


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

const withdraw = () => {
  setBalance(balance - amount);
}

const updateBalance = (change) => {
  // Calculate new balance
  let newBalance = balance - change;

  // Update state variable for balance
  setBalance(newBalance);
}

const onTabChange = (evt, tabIndex) => {
  setSelectedTab(tabIndex);
}

return (
  <div style={{padding: 16}}>
      {loading ? (
          <CircularProgress />
      ) : (
          <>
              <Heading text="Manage Account" type="h2" />
              <DisplayBalance balance={balance} />
              <Tabs value={selectedTab} onChange={onTabChange}>
                  <Tab label="Deposit" />
                  <Tab label="Withdrawal" />
              </Tabs>
              {selectedTab === 0 ? (
                  <Deposits
                      balance={balance}
                      updateBalance={updateBalance}
                  />
              ) : (
                  <Withdrawals
                      balance={balance}
                      updateBalance={updateBalance}
                  />
              )}
              <br />
              <hr />
          </>
      )}
      {props.children}
  </div>
);

  
export default Withdrawals;