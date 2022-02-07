import styles from './modal.module.scss';
import useHandleOutSide from './useHandleOutSide';

interface IProps {
  open: boolean;
  onClick: () => void;
  children: any;
}

const Modal = ({ open, onClick = () => {}, children }: IProps) => {
  const { ref, containerRef } = useHandleOutSide({ open, onClick });

  return (
    <div ref={containerRef} className={styles.container}>
      <div ref={ref} className={styles.wrap}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
