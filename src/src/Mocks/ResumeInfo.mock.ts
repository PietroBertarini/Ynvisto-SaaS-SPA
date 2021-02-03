import { EResumeStatus, ResumoInfoProps } from '../Components/Components/ResumeInfo/ResumeInfo.component';

export const mockOneResumeInfo : ResumoInfoProps[] = [
  {
    value: 30_304.94,
    subtitle: 'Volume isento disponível em Junho',
    status: EResumeStatus.WARNING,
  },
];
export const mockExpectedResumeTaxReport : ResumoInfoProps[] = [
  {
    value: 4_000,
    subtitle: 'Volume isento disponível em Junho',
    status: EResumeStatus.WARNING,
  },
];
export const mockExpectedResumeTaxReport2 : ResumoInfoProps[] = [
  {
    value: 20_000,
    subtitle: 'Volume isento disponível em Junho',
    status: EResumeStatus.GOOD,
  },
];

export const mockTwoResumeInfo : ResumoInfoProps[] = [
  {
    value: 30_304.94,
    subtitle: 'Volume isento disponível em Maio',
    status: EResumeStatus.BAD,
  },
  {
    value: 30_304.94,
    subtitle: 'Volume isento disponível em Maio',
    status: EResumeStatus.WARNING,
  },
];
export const mockThreeResumeInfo : ResumoInfoProps[] = [
  {
    value: 30_304.94,
    subtitle: 'Volume isento disponível em Maio',
    status: EResumeStatus.GOOD,
  },
  {
    value: 30_304.94,
    subtitle: 'Volume isento disponível em Maio',
    status: EResumeStatus.BAD,
  },
  {
    value: 30_304.94,
    subtitle: 'Volume isento disponível em Maio',
    status: EResumeStatus.WARNING,
  },
];
