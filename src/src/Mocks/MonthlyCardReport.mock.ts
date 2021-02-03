import { IMonthlyCardData } from '../Components/Components/MonthlyCardReportLegend/MonthlyCardReportLegend.types';

export const defaultExemptionSaleVolumeUsedData : IMonthlyCardData[] = [{
  color: '#05E985',
  label: 'Volume Disponível',
  value: 20_000,
}, {
  color: '#EB5050',
  label: 'Volume gasto',
  value: 0,
},
];

export const ExemptionSaleVolumeUsedDataLowerThan0 : IMonthlyCardData[] = [{
  color: '#05E985',
  label: 'Volume Disponível',
  value: 0,
}, {
  color: '#EB5050',
  label: 'Volume gasto',
  value: 44_000,
},
];

export const ExemptionSaleVolumeUsedDataPlus0 : IMonthlyCardData[] = [{
  color: '#05E985',
  label: 'Volume Disponível',
  value: 10_000,
}, {
  color: '#EB5050',
  label: 'Volume gasto',
  value: 10_000,
},
];

export const ExemptionSaleVolumeUsedDataEqual0 : IMonthlyCardData[] = [{
  color: '#05E985',
  label: 'Volume Disponível',
  value: 0,
}, {
  color: '#EB5050',
  label: 'Volume gasto',
  value: 20_000,
},
];

export const getTaxDataDefault : IMonthlyCardData[] = [];

export const getTaxDataAllVale : IMonthlyCardData[] = [{
  color: '#FFE403',
  label: 'Operações Comuns',
  value: 10,
}, {
  color: '#ae7f05',
  label: 'Day Trade',
  value: 100,
},
{
  color: '#fa6819',
  label: 'Operações FII',
  value: 1000,
},
{
  color: '#af4713',
  label: 'Criptomoeda',
  value: 10000,
}, {
  color: '#ff0606',
  label: 'Subscrição',
  value: 100000,
},
];

export const getTaxData2Vale : IMonthlyCardData[] = [{
  color: '#FFE403',
  label: 'Operações Comuns',
  value: 10,
}, {
  color: '#ae7f05',
  label: 'Day Trade',
  value: 100,
},
];

export const getTaxDataRemains : IMonthlyCardData[] = [
  {
    color: '#fa6819',
    label: 'Operações FII',
    value: 1000,
  },
  {
    color: '#af4713',
    label: 'Criptomoeda',
    value: 10000,
  }, {
    color: '#ff0606',
    label: 'Subscrição',
    value: 100000,
  },
];

export const getTaxDataDarf : IMonthlyCardData[] = [
  {
    color: '#52130e',
    label: 'DARFs Anteriores',
    value: 9,
  },
  {
    color: '#fa6819',
    label: 'Operações FII',
    value: 1000,
  },
  {
    color: '#af4713',
    label: 'Criptomoeda',
    value: 10000,
  }, {
    color: '#ff0606',
    label: 'Subscrição',
    value: 100000,
  },
];

export const getProfitDataAllValues : IMonthlyCardData[] = [{
  color: '#52A9F4',
  label: 'Operações Comuns',
  value: 10,
}, {
  color: '#71D3DE',
  label: 'Day Trade',
  value: 100,
},
{
  color: '#6FC7AE',
  label: 'Operações FII',
  value: 1000,
},
{
  color: '#365f00',
  label: 'Criptomoeda',
  value: 10000,
},
{
  color: '#192d00',
  label: 'Subscrição',
  value: 100000,
},
];

export const getProfitDataDefault : IMonthlyCardData[] = [
];

export const getProfitData2Vale: IMonthlyCardData[] = [{
  color: '#52A9F4',
  label: 'Operações Comuns',
  value: 10,
}, {
  color: '#71D3DE',
  label: 'Day Trade',
  value: 100,
},
];

export const getProfitDataRemains : IMonthlyCardData[] = [
  {
    color: '#6FC7AE',
    label: 'Operações FII',
    value: 1000,
  },
  {
    color: '#365f00',
    label: 'Criptomoeda',
    value: 10000,
  },
  {
    color: '#192d00',
    label: 'Subscrição',
    value: 100000,
  },
];
export const getProfitDataNegativeAndPositive : IMonthlyCardData[] = [
  {
    color: '#6FC7AE',
    label: 'Operações FII',
    value: 1000,
  },
  {
    color: '#365f00',
    label: 'Criptomoeda',
    value: 10000,
  },
  {
    color: '#192d00',
    label: 'Subscrição',
    value: -100000,
  },
];
export const getProfitDataRemainsNegative: IMonthlyCardData[] = [
  {
    color: '#6FC7AE',
    label: 'Operações FII',
    value: -1000,
  },
  {
    color: '#365f00',
    label: 'Criptomoeda',
    value: -10000,
  },
  {
    color: '#192d00',
    label: 'Subscrição',
    value: -100000,
  },
];

export const getNegativeProfitDataRemainsSome0 : IMonthlyCardData[] = [
  {
    color: '#6FC7AE',
    label: 'Operações FII',
    value: -1000,
  },
  {
    color: '#365f00',
    label: 'Criptomoeda',
    value: 0,
  },
  {
    color: '#192d00',
    label: 'Subscrição',
    value: 0,
  },
];

export const getPositiveProfitDataRemainsSome0 : IMonthlyCardData[] = [
  {
    color: '#6FC7AE',
    label: 'Operações FII',
    value: 1000,
  },
  {
    color: '#365f00',
    label: 'Criptomoeda',
    value: 0,
  },
  {
    color: '#192d00',
    label: 'Subscrição',
    value: 0,
  },
];
