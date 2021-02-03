import { EProfitCardStatus, ProfitCardProps } from '../Components/Components/ProfitCard/ProfitCard.component';

export const mockCalendarData: ProfitCardProps[] = [
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.LATE,
    month: 'Janeiro',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.LATE,
    month: 'Fevereiro',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.PAID,
    month: 'Março',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NO_DARF,
    month: 'Abril',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.PENDING,
    month: 'Maio',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Junho',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Julho',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Agosto',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Setembro',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Outubro',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Novembro',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Dezembro',
  },

];
export const mockCalendarMissingData: ProfitCardProps[] = [
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.LATE,
    month: 'Janeiro',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.LATE,
    month: 'Fevereiro',
  },

  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.PENDING,
    month: 'Maio',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Junho',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Julho',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Agosto',
  },
];
export const expectedMockCalendarMissingData: ProfitCardProps[] = [
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.LATE,
    month: 'Janeiro',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.LATE,
    month: 'Fevereiro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Março',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Abril',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.PENDING,
    month: 'Maio',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Junho',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Julho',
  },
  {
    profit: 30_304.94,
    tax: 506.14,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Agosto',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Setembro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Outubro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Novembro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Dezembro',
  },

];
export const expectedMockCalendarDefaultMonth: ProfitCardProps[] = [
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Junho',
  },

];
export const mockCalendarDataExample3: ProfitCardProps[] = [
  {
    profit: 4000,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Janeiro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Fevereiro',
  },
  {
    profit: 80,
    tax: 4_220,
    status: EProfitCardStatus.LATE,
    month: 'Março',
  },
  {
    profit: 80,
    tax: 4_220,
    status: EProfitCardStatus.PAID,
    month: 'Abril',
  },
  {
    profit: 40,
    tax: 4_220,
    status: EProfitCardStatus.PENDING,
    month: 'Maio',
  },
  {
    profit: 80,
    tax: 4_220,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Junho',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Julho',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Agosto',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Setembro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Outubro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Novembro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Dezembro',
  },

];
export const mockCalendarDataExample4: ProfitCardProps[] = [
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Janeiro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Fevereiro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Março',
  },
  {
    profit: 80,
    tax: 4220,
    status: EProfitCardStatus.PAID,
    month: 'Abril',
  },
  {
    profit: 80,
    tax: 4220,
    status: EProfitCardStatus.PAID,
    month: 'Maio',
  },
  {
    profit: 80,
    tax: 4220,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Junho',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Julho',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Agosto',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Setembro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Outubro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Novembro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Dezembro',
  },

];
export const mockCalendarDataExample5: ProfitCardProps[] = [
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Maio',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Maio',
  },

];
export const mockCalendarDataExampleUndefined: ProfitCardProps[] = [
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Janeiro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Fevereiro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Março',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Abril',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NO_DARF,
    month: 'Maio',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Junho',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Julho',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Agosto',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Setembro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Outubro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Novembro',
  },
  {
    profit: 0,
    tax: 0,
    status: EProfitCardStatus.NOT_FINISHED,
    month: 'Dezembro',
  },

];
