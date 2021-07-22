import React from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
const MyModal = ({children,title,content,actions}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={children}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
            {content}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {actions}
      </Modal.Actions>
    </Modal>
  );
};
export default MyModal;
