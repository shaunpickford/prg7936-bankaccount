// 1. Import any dependencies
// useState = "state hook"
import { useState } from 'react';
import Heading from './Heading';
import Deposits from './Deposits';
import Withdrawals from './Withdrawals';
import Balance from './Balance';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// 2. Create your component function
function ManageAccount() {
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

    const updateBalance = (change) => {
        let newBalance = balance + change;
        setBalance(newBalance);
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

    return (
        <div style={{padding: 16}}>
            <Heading text="Manage Account" type="h2" />
            <Balance balance={balance} />
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
        </div>
    );
}

// 3. Export your component
export default ManageAccount;