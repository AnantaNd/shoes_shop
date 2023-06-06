import {
  Button, Divider, Grid, Modal, Typography,
} from '@mui/material';
import AcordionPayment from 'components/AcordionPayment/AcordionPayment';
import { useState } from 'react';
import { MdCheck, MdOutlineContentCopy } from 'react-icons/md';
import style from './ModalPayment.module.css';

export function ModalPayment({
  accountName, itemName, price, orderId, va, onSubmit,
}) {
  const [open, setOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    }
    return document.execCommand('copy', true, text);
  }

  const handleCopyClick = () => {
    copyTextToClipboard(va)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button sx={{ borderRadius: '1rem' }} variant="contained" onClick={handleOpen}>Checkout</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={style.container}>
          <Grid container mx={2} my={2}>
            <Typography sx={{ fontWeight: 650 }}>Complate Your Payment</Typography>
          </Grid>
          <div className={style.content}>
            <Grid container my={2} xs={12} justifyContent="space-between">
              <Grid item>
                <Typography>Account Name</Typography>
              </Grid>
              <Grid item>
                <Typography>{accountName}</Typography>
              </Grid>
            </Grid>
            <Grid container my={2} xs={12} justifyContent="space-between">
              <Grid item>
                <Typography>Item Name</Typography>
              </Grid>
              <Grid item>
                <Typography>{itemName}</Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container my={2} xs={12} justifyContent="space-between">
              <Grid item>
                <Typography>No VA</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ alignItems: 'center' }} value={va}>
                  {va}
                  <Grid sx={{ marginLeft: '10px', display: 'inline' }}>
                    {isCopied
                      ? <MdCheck />
                      : <MdOutlineContentCopy onClick={handleCopyClick} style={{ cursor: 'pointer' }} />}
                  </Grid>
                </Typography>
              </Grid>
            </Grid>
            <Grid container my={2} xs={12} justifyContent="space-between">
              <Grid item>
                <Typography>Order ID</Typography>
              </Grid>
              <Grid item>
                <Typography>{orderId}</Typography>
              </Grid>
              <Grid container my={2} xs={12} justifyContent="space-between">
                <Grid item>
                  <Typography>Total Payment</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontWeight: 550, color: '#D2001A' }}>
                    Rp.
                    {price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container my={2}>
              <Typography sx={{ fontWeight: 650 }}>Payment Method</Typography>
            </Grid>
            <Grid container my={2}>
              <Grid item>
                <AcordionPayment />
              </Grid>
            </Grid>
          </div>
          <Grid container mx={2} mt={3}>
            <Grid item marginRight={2}>
              <Button variant="contained" onClick={onSubmit} sx={{ fontWeight: 650, borderRadius: '1rem' }}>confirm</Button>
            </Grid>
            <Grid item marginRight={2}>
              <Button onClick={handleClose}>cancel</Button>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </>
  );
}
