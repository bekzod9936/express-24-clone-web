import { useEffect, useRef, useState } from 'react';
import styles from './modal.module.scss';

interface Props {
  open: boolean;
  onClick: () => void;
}

const useHandleOutSide = ({ open, onClick }: Props) => {
  const ref: any = useRef(null);
  const containerRef: any = useRef(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target) && open) {
      onClick();
    }
  };

  useEffect(() => {
    if (open) {
      containerRef.current.classList.add(styles.visible);
    } else {
      containerRef.current.classList.remove(styles.visible);
    }
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [open]);

  return { ref, containerRef };
};

export default useHandleOutSide;
