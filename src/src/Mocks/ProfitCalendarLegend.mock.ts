import { EColor, ILegendData } from '../Components/Components/ProfitCalendarLegend/ProfitCalendarLegend.component';

export const mockCalendarLegend : ILegendData[] = [
  {
    label: 'DARF Paga',
    color: EColor.BLUE,
  },
  {
    label: 'Não houve DARF',
    color: EColor.GREEN,
  },
  {
    label: 'DARF Pendente',
    color: EColor.YELLOW,
  },
  {
    label: 'DARF Atrasada',
    color: EColor.RED,
  },
  {
    label: 'Mês não finalizado',
    color: EColor.WHITE,
  },
];
