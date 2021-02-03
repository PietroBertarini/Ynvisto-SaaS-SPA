import { EProfitCardStatus, ProfitCardProps } from '../../Components/ProfitCard/ProfitCard.component';
import { EResumeStatus, ResumoInfoProps } from '../../Components/ResumeInfo/ResumeInfo.component';
import MonthlyTaxReport from '../../../Classes/MonthlyTaxReport/MonthlyTaxReport.class';

const otherTabs = [
  'Geral',
];

export const allMonths = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
// TODO: Definitely get from api in future
const DEFAULT_STOCK_THRESHOLD = 20_000;

/** All navigation tabs inside TaxReport screen  */
export const allTabs = otherTabs.concat(allMonths);

/**
 * Get all profit data and tax data to populate the monthly calendar of TaxAndReport page.
 * @param monthlyReports: Monthly report data from api.
 */
export function buildProfitCardsProps(monthlyReports ?: MonthlyTaxReport[])
    : ProfitCardProps[] {
  if (monthlyReports === undefined) {
    return createRemainingProfitCardsProps([]);
  }
  const actualYear = new Date().getFullYear();
  const profitAndTaxFromApi = monthlyReports.filter((item) => item.year
      === actualYear).map(buildProfitCardProps);
  return createRemainingProfitCardsProps(profitAndTaxFromApi);
}

/**
 * Get a individual profit data and tax data to populate the monthly calendar of TaxAndReport page.
 * @param monthlyReport: Monthly report data from api.
 */
export const buildProfitCardProps = (monthlyReport : MonthlyTaxReport) : ProfitCardProps => {
  const actualMonth = new Date().getMonth();
  const monthlyReportMonth = monthlyReport.monthIndex;

  const { tax } = monthlyReport;
  const { profit } = monthlyReport;

  return {
    profit: monthlyReportMonth > actualMonth ? 0 : profit,
    month: allMonths[monthlyReportMonth],
    tax: monthlyReportMonth > actualMonth ? 0 : tax,
    status: getTaxStatus(tax, monthlyReportMonth, !!monthlyReport.darfPaymentId),
  };
};

export function getDefaultProfitCard(month: number) : ProfitCardProps {
  const actualMonth = new Date().getMonth();
  return {
    profit: 0,
    month: allMonths[month],
    tax: 0,
    status: month >= actualMonth ? EProfitCardStatus.NOT_FINISHED : EProfitCardStatus.NO_DARF,
  };
}

export function createRemainingProfitCardsProps(builtProps : ProfitCardProps[]) : ProfitCardProps[] {
  // TODO: This executes in O(n^2). Pass this to O(n)
  return allMonths.map((month, index) => {
    const propsFound = builtProps.find((item) => item.month === allMonths[index]);
    return (
      propsFound === undefined ? getDefaultProfitCard(index) : propsFound);
  });
}

/**
 * Create the Resume Info of Tax Report page using the actual month tax and profit data.
 * @param monthlyReport: Actual monthly data.
 */
export function getResumeInfo(monthlyReport: MonthlyTaxReport[] | undefined) : ResumoInfoProps[] {
  const actualMonth = new Date().getMonth();
  const defaultResume = [{
    value: DEFAULT_STOCK_THRESHOLD,
    subtitle: `Volume isento disponível em ${allMonths[actualMonth]}`,
    status: EResumeStatus.GOOD,
  }];
  if (!monthlyReport) {
    return defaultResume;
  }
  const monthlyReportActualMonth = monthlyReport.find(
    (item) => item.monthIndex === actualMonth,
  );

  if (!monthlyReportActualMonth) {
    return defaultResume;
  }

  const remainVolume = monthlyReportActualMonth.remainExemptionVolumeBrazil;
  return [{
    value: remainVolume < 0 ? 0 : remainVolume,
    subtitle: `Volume isento disponível em ${allMonths[actualMonth]}`,
    status: getStatusResume(monthlyReportActualMonth),
  }];
}

/**
 * Obtain the status color of resume, showing the respectively colors:
 * Sell Volume R$0-R$15_000.00 = Ok-Green
 * Sell Volume R$15_000.00-R$18_000.00 = Alert-Yellow
 * Sell Volume R$18_000.00-R$20_000.00 or more = Warning-Red
 * @param monthlyReport: actual month data that will be used for resume
 */
export function getStatusResume(monthlyReport : MonthlyTaxReport) : EResumeStatus {
  const { remainExemptionVolumeBrazil } = monthlyReport;
  if (remainExemptionVolumeBrazil > 5_000) {
    return EResumeStatus.GOOD;
  }
  if (remainExemptionVolumeBrazil > 2_000) {
    return EResumeStatus.WARNING;
  }
  return EResumeStatus.BAD;
}

/**
 * Discover the status color of calendar monthly card using the tax volume.
 *  Month in progress - White
 *  No Darf - Green
 *  Darf Paid - Blue
 *  Darf Pending - Yellow
 *  Darf Late - Red
 * @param tax: volume of tax.
 * @param month: number of month, to discover if is early or in future of actual month
 * @param darfPaid: boolean to discover if darf is paid or not
 */
export function getTaxStatus(tax: number, month : number, darfPaid : boolean) : EProfitCardStatus {
  const actualMonth = new Date().getMonth();

  if (month >= actualMonth) {
    return EProfitCardStatus.NOT_FINISHED;
  }

  if (tax === 0 || tax < 10) {
    return EProfitCardStatus.NO_DARF;
  }

  if (darfPaid) {
    return EProfitCardStatus.PAID;
  }

  if (month === actualMonth - 1) {
    return EProfitCardStatus.PENDING;
  }

  return EProfitCardStatus.LATE;
}
