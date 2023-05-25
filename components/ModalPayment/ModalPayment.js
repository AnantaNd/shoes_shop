import { Box, Button, Modal } from '@mui/material'
import Link from 'next/link'

export const ModalPayment = ({handleOpen, onOpen, handleClose }) => {
  return (
    <div>
      <Button onClick={handleOpen}>Checkout</Button>
      <Modal
        open={onOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <h1>Checkout Information</h1>
          <p>your shoes still processing</p>
          <p>you can see your history payment at 
            <Link href={'/history'}> <span>history</span></Link>
          </p>
        </Box>
      </Modal>
    </div>
  )
}
