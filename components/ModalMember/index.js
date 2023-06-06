import {
  Button,
  Divider,
  Grid, Modal, Typography
} from '@mui/material';
import AccordionMemberType from 'components/AccordionMemberType';
import { useState } from 'react';
import style from './ModalMember.module.css';

export function ModalMember({account, memberType}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
  return (
    <>
      <Button sx={{textTransform: 'capitalize', marginTop: '1rem', fontWeight: 800, padding: '10px 12px', borderRadius: '8rem'}} variant="text" onClick={handleOpen}>Check Your Banefit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={style.container}>
          <Grid container mx={2} my={2}>
            <Typography sx={{ fontWeight: 650 }}>Membership Information</Typography>
          </Grid>
          <div className={style.content}>
            <Grid container my={2} xs={12} justifyContent="space-between">
              <Grid item>
                <Typography>Account Name</Typography>
              </Grid>
              <Grid item>
                <Typography>{account}</Typography>
              </Grid>
            </Grid>
            <Grid container my={2} xs={12} justifyContent="space-between">
              <Grid item>
                <Typography>Member Type</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{fontWeight: 550, color:'#D2001A'}}>{memberType}</Typography>
              </Grid>
            </Grid>
            <Divider/>
            <Grid container my={2}>
              <Grid>
                <Grid item>
                  <Typography>Tier</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container my={2}>
              <Grid>
                <Grid item>
                  <AccordionMemberType/>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <Grid container mx={2} mt={1}>
            <Grid item>
              <Button sx={{textTransform: 'capitalize', fontWeight: 800, padding: '10px 12px', borderRadius: '8rem', color: '#D2001A'}} onClick={handleClose}>close</Button>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </>
  );
}
