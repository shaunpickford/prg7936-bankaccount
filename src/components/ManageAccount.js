// 1. Import any dependencies
// useState = "state hook"
import { useState, useEffect } from 'react';
import { dbQuery } from '../firebase';
import Heading from './Heading';
import Deposits from './Deposits';
import Withdrawals from './Withdrawals';
import DisplayBalance from './Balance';
import Transactions from './Transactions';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// 2. Create your component function
function ManageAccount(props) {
    // state variable to track the account balance
    const [balance, setBalance] = useState(999);

    // state variable to track the amount field
    const [amount, setAmount] = useState(50);

    // state variable to track loading
    const [loading, setLoading] = useState(true);

    const [selectedTab, setSelectedTab] = useState(0);

    const fetchAccountInfo = async () => {
        let results = await dbQuery("uid", props.currentUser.uid);
        if (results && results.length === 1) {
            setBalance(results[0].balance);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (props.currentUser !== null) {
            fetchAccountInfo();
        }
    }, [props.currentUser]);

    const withdraw = () => {
        setBalance(balance - amount);
    }

    const updateBalance = (change) => {
        // Calculate new balance
        let newBalance = balance + change;

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
                    <Transactions />
                </>
            )}
            {props.children}
        </div>
    );
}

// 3. Export your component
export default ManageAccount;