// 1. Import any dependencies
// useState = "state hook"
import { useState } from 'react';
import Heading from './Heading';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// 2. Create your component function
function Form() {
    // state variable to track the account balance
    const [balance, setBalance] = useState(999);

    // state variable to track the amount field
    const [amount, setAmount] = useState(50);

    const [selectedTab, setSelectedTab] = useState(0);

    const deposit = function () {
        let newBalance = balance + amount;
        setBalance(newBalance);
    }

    const withdraw = () => {
        setBalance(balance - amount);
    }

    const onFieldChange = (evt) => {
        // gives us the data in the field
        let newAmount = evt.target.value;
        if (newAmount > balance) {
            newAmount = balance;
        }

        setAmount(newAmount);
    }

    const onTabChange = (evt, tabIndex) => {
        setSelectedTab(tabIndex);
    }

    // If the amount is less than the balance, user can withdraw
    let canWithdraw = true;
    if (amount > balance) {
        canWithdraw = false;
    }

    // Calculate new balance
    //const newBalance = balance + amount;

    return (
        <div style={{padding: 16}}>
            <Heading text="Manage Account" type="h2" />
            <Tabs value={selectedTab} onChange={onTabChange}>
                <Tab label="Deposit" />
                <Tab label="Withdrawal" />
            </Tabs>
            {selectedTab === 0 ? (
                <Heading text="Deposit Funds" type="h3" />
            ) : (
                <Heading text="Withdraw Funds" type="h3" />
            )}
            <b>Your balance: {balance}</b>
            <br />
            <div>Transaction Amount: {amount}</div>
            
            {/* Add a form field (number) to enter amount */}
            {/* <input type="number" value={amount} onChange={onFieldChange}/>
            <button onClick={deposit}>Deposit</button>
            <button onClick={withdraw}>Withdraw</button> */}
            <hr />
            <Stack spacing={2} direction="row" justifyContent="center">
                <input type="number" value={amount} onChange={onFieldChange}/>
                <Button variant="outlined" size="small" onClick={deposit}>Deposit</Button>
                <Button variant="outlined" size="small" onClick={withdraw} disabled={canWithdraw === false}>Withdraw</Button>
            </Stack>
            {/* <Box>
                <p>New Balance after Transaction: {newBalance}</p>
            </Box> */}
            {/* If canWithdraw is FALSE, show the Alert */}
            {canWithdraw === false ? (
                <Alert severity='warning' sx={{ mt: 2 }}>
                    Insufficient funds for Withdrawal
                </Alert>
            ) : null}
        </div>
    );
}

// 3. Export your component
export default Form;