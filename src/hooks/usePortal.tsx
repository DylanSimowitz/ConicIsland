import React, {useState} from 'react';
import {createPortal} from 'react-dom';

const usePortal = (selector: string, Child: React.ComponentType): React.FC => {
  const [container] = useState(() => document.querySelector(selector));
  const Portal: React.FC = ({children}) => {
    if (container) {
      return createPortal(<Child>{children}</Child>, container);
    }
    return <></>;
  };
  return Portal;
};

export default usePortal;
