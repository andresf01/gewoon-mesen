import React, { useState } from 'react';
import HelpTile from './HelpTile';
import AdditionalInfo from './AdditionalInfo';
import AyudarIcon from '../assets/AyudarIcon';
import Button from '../assets/Button';

const initialTypes = [
  {
    id: 1,
    title: 'Donando comida',
    description: 'Donación de alimentos no perecederos de X o Y categoría.',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Hacer la compra por alguien',
    description:
      'Para personas mayores de 80 años, médicos, mdres cabeza de hogar que no pueden salir a hacer sus compras.',
    isChecked: false,
  },
  {
    id: 3,
    title: 'Donando dinero',
    description:
      'Para pagar mercados, servicios básicos y arriendo de familias en riesgo.',
    isChecked: false,
  },
  {
    id: 4,
    title: 'Donando mis conocimientos',
    description:
      'Brindando asistencia médica online, enseñar algo online o ayuda con tecnología.',
    isChecked: false,
  },
];

const CanHelp = () => {
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
          <AyudarIcon width="48" height="48" />
        </div>
        <div className="text-blue-main text-lg ml-4 font-medium">
          Puedo ayudar con
        </div>
      </div>
      <div className="text-xs">
        Seleccione la categoria que más se ajuste con el tipo de ayuda que usted
        puede brindar.
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
      <div className="flex justify-center mt-2">
        <Button className="w-40" label="Siguiente" />
      </div>
    </div>
  );
};

export { CanHelp as default };
