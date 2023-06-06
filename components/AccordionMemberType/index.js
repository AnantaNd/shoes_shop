import { Grid } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
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

export default function AccordionMemberType() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{width: '350px'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Silver</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container my={1} justifyContent="space-between">
            <Grid item>
              <Typography>Tipe Member</Typography>
            </Grid>
            <Grid item>
              <Typography>Silver</Typography>
            </Grid>
          </Grid>
          <Grid container my={1} justifyContent="space-between">
            <Grid item>
              <Typography>Keuntungan</Typography>
            </Grid>
            <Grid item>
              <Typography>+ 3% Discount</Typography>
            </Grid>
          </Grid>
          <Grid container my={1}>
            <Grid item>
              <Typography variant='subtitle2'>beli 3 produk untuk mencapai tingkatan silver membership dan dapatakan keuntungnya</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Gold</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container my={1} justifyContent="space-between">
            <Grid item>
              <Typography>Tipe Member</Typography>
            </Grid>
            <Grid item>
              <Typography>Gold</Typography>
            </Grid>
          </Grid>
          <Grid container my={1} justifyContent="space-between">
            <Grid item>
              <Typography>Keuntungan</Typography>
            </Grid>
            <Grid item>
              <Typography>+ 5% Discount</Typography>
            </Grid>
          </Grid>
          <Grid container my={1}>
            <Grid item>
              <Typography variant='subtitle2'>beli 5 produk untuk mencapai tingkatan gold membership dan dapatakan keuntungnya</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Platinum</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container my={1} justifyContent="space-between">
            <Grid item>
              <Typography>Tipe Member</Typography>
            </Grid>
            <Grid item>
              <Typography>Platinum</Typography>
            </Grid>
          </Grid>
          <Grid container my={1} justifyContent="space-between">
            <Grid item>
              <Typography>Keuntungan</Typography>
            </Grid>
            <Grid item>
              <Typography>+ 8% Discount</Typography>
            </Grid>
          </Grid>
          <Grid container my={1}>
            <Grid item>
              <Typography variant='subtitle2'>beli 8 produk untuk mencapai tingkatan platinum membership dan dapatakan keuntungnya</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}