import React, { useEffect, useState } from 'react';
import { Label, Main } from './LabelStocks.styles';
import { handleTitle, ELabelColors } from './LabelStocks.utils';

type LabelProps = {
  title: string,
}

const LabelStocks = ({ title } : LabelProps) => {
  const [typeOfLabel, setTypeOfLabel] = useState(ELabelColors.ACOES);

  useEffect(() => {
    setTypeOfLabel(handleTitle(title));
  }, [title]);

  return (
    <Main>
      <Label title={typeOfLabel}>{typeOfLabel}</Label>
    </Main>
  );
};
export default LabelStocks;
