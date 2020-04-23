import React from 'react';
import InfoIcon from '../assets/InfoIcon';

const AdditionalInfo = () => (
  <div className="text-blue-main text-xs mb-5 flex items-center">
    <div className="fill-current text-blue-main">
      <InfoIcon />
    </div>
    <div className="ml-3 leading-tight">
      Para verificar la transparencia, usted tendrá el contacto de quien pudo
      ayudar o factura exacta tal sea el caso del dinero aportado.
    </div>
  </div>
);

export { AdditionalInfo as default };
