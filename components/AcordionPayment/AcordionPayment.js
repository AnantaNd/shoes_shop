import { Grid } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import * as React from 'react';
import { MdOutlineExpandMore } from 'react-icons/md';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<MdOutlineExpandMore sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function AcordionPayment() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Dana</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container mx={2} my={2}>
            <Grid item>
              <ul style={{padding: '2px', lineHeight: 1.6 }}>
                <li>First open the Dana application.</li>
                <li>Then login using the registered number and select "send".</li>
                <li>Click send to bank and add new bank account.</li>
                <li>Select and click bank BRI, and then input virtual account.</li>
                <li>Make sure the payment data correctly, and click confirm.</li>
                <li>Input your PIN Dana application.</li>
                <li>Wait a few moments until the transaction process is successful.</li>
                <li>Orders will be processed within 24 hours by our store</li>
                <li>You can see the order on the <Link href={'/history'}>
                  <span 
                  style={{color: '#D2001A', 
                          fontWeight: 550,
                          textDecoration: 'none', cursor: 'pointer'}}>History Page
                  </span></Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}