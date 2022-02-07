import Modal from 'components/Modal';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';

const SignIn = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => setOpen((prev) => !prev), []);
  return (
    <>
      <button onClick={handleClick}>{t('signin')}</button>
      <Modal open={open} onClick={handleClick}>
        <div>dkfksdkf</div>
      </Modal>
    </>
  );
};

export default SignIn;
