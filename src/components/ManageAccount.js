// 1. Import any dependencies
// useState = "state hook"
import { useState, useEffect } from 'react';
import { dbQuery, saveBalance } from '../firebase';
import Transaction from '../classes/Transaction.js';
import Heading from './Heading';
import Deposits from './Deposits';
import Withdrawals from './Withdrawals';
import DisplayBalance from './Balance';
import TransactionsTable from './TransactionsTable';

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

    // state variable to track transactions
    const [transactions, setTransactions] = useState([]);

    const [selectedTab, setSelectedTab] = useState(1);

    // state variable to store account info from db
    const [accountData, setAccountData] = useState(null);

    const fetchAccountInfo = async () => {
        let results = await dbQuery("uid", props.currentUser.uid);
        if (results && results.length === 1) {
            setAccountData(results[0]);
            setBalance(results[0].balance);
        }
        setLoading(false);
    }

    /* 2 arguments for a side effect:
        1) Function (the side effect)
        2) What to watch (the triggers/events)
    */
    useEffect(() => {
        if (props.currentUser !== null) {
            fetchAccountInfo();
        }
    }, [props.currentUser]);

    useEffect(() => {
        /*console.log('balance changed');
        if (accountData) {
            saveBalance(accountData, balance);
        }*/
    }, [balance]);

    const updateBalance = (change) => {
        // Calculate new balance
        let newBalance = balance + change;

        // Create an instance of Transaction class
        let newTransaction = new Transaction(change, newBalance);

        console.log(newTransaction);

        const copyOfTransactions = [...transactions];
        copyOfTransactions.push(newTransaction);

        // save to state
        setTransactions(copyOfTransactions);

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
                    {/* {selectedTab === 0 ? (
                        <Deposits
                            balance={balance}
                            changeBalance={updateBalance}
                        />
                    ) : (
                        <Withdrawals
                            balance={balance}
                            updateBalance={updateBalance}
                        />
                    )}
                    <br />
                    <hr />
                    <TransactionsTable
                        allTransactions={transactions}
                    /> */}
                </>
            )}
            {props.children}
        </div>
    );
}

// 3. Export your component
export default ManageAccount;