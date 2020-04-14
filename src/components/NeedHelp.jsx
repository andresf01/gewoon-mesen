import React, { useState } from 'react';
import HelpTile from './HelpTile';
import AdditionalInfo from './AdditionalInfo';
import NecesitoAyudaIcon from '../assets/NecesitoAyudaIcon';
import Button from '../assets/Button';

const initialTypes = [
  {
    id: 1,
    title: 'Comida',
    description: 'Recibir alimentos no perecederos de X o Y categoría.',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Hacer las compras',
    description:
      'Soy una persona vulnerable que no puede salir de casa para comprar lo necesario',
    isChecked: false,
  },
  {
    id: 3,
    title: 'El pago de servicios básicos',
    description:
      'Sólo aplica estratos 1 y 2. Se debe agregar la factura o número de servicio emcali.',
    isChecked: false,
  },
  {
    id: 4,
    title: 'Educación',
    description:
      'Ayuda en uso de plataformas tecnológicas, educación básica: Matemáticas, español inglés.',
    isChecked: false,
  },
];

const NeedHelp = () => {
  const [types, setTypes] = useState(initialTypes);

  const handleClickType = (id) => () => {
    setTypes(
      types.map((type) =>
        type.id === id ? { ...type, isChecked: !type.isChecked } : type
      )
    );
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center my-4">
        <div className="px-2 py-1 fill-current text-white bg-blue-main rounded-lg">
          <NecesitoAyudaIcon width="48" height="48" />
        </div>
        <div className="text-blue-main text-xl ml-4">Necesito ayuda con</div>
      </div>
      <div>
        Seleccione la categoria que mas se ajuste con el tipo de ayuda que usted
        necesita.
      </div>
      <div className="grid grid-cols-1 row-gap-2 my-8">
        {types.map((type) => (
          <HelpTile
            {...type}
            key={type.id}
            handleClickType={handleClickType(type.id)}
          />
        ))}
      </div>
      <AdditionalInfo />
      <Button label="Siguiente" />
    </div>
  );
};

export { NeedHelp as default };
