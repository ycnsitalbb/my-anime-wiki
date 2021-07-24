import React from "react";
import { Modal, Image } from "semantic-ui-react";
const PictureModal = ({ image_url, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={children}
    >
      <Modal.Content image>
        <Image src={image_url} wrapped fluid />
      </Modal.Content>
    </Modal>
  );
};
export default PictureModal;
