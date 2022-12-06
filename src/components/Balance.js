import Heading from './Heading';

import Box from '@mui/material/Box';

// This is a component named Balance
function Balance({ balance }) {
    return (
        <Box>
            <Heading text={`Account Balance: $${balance}`} type="h4" />
        </Box>
    );
}
  
export default Balance;