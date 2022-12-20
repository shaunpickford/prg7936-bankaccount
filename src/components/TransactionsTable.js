import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TransactionsTable(props) {

    // hard coded object
    /*let transaction1 = {
        type: "Deposit",
        amount: 25,
        endingBalance: 225
    };*/

    return (
        <div>
            <h1>Transactions</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Transaction Type</b></TableCell>
                            <TableCell align="right"><b>Amount</b></TableCell>
                            <TableCell align="right"><b>Ending Balance</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.allTransactions.map((t) => {
                            return (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {t.type}
                                    </TableCell>
                                    <TableCell align="right">${t.amount}</TableCell>
                                    <TableCell align="right">${t.endingBalance}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

// 3. Export your component
export default TransactionsTable;