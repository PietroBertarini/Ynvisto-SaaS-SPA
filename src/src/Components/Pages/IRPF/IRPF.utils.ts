export const allTabs = [
  'Bens e Direitos',
  'Rend. Isentos e Não Tributáveis',
  'Rend. Trib. Recebidos de PF/Exterior',
  'Rend. Suj. à Tributação Exclusiva/Definitiva',
  'Operações Comuns/Daytrade',
  'Operações FII',
];

export function getInitialValueTab(url: string | undefined): number {
  const parsed = url?.replace('%20', ' ');
  if (parsed === 'Rend. Isentos e Não Tributáveis') return 1;
  if (parsed === 'Rend. Trib. Recebidos de PF Exterior') return 2;
  if (parsed === 'Rend. Suj. à Tributação Exclusiva Definitiva') return 3;
  if (parsed === 'Operações Comuns Daytrade') return 4;
  if (parsed === 'Operações FII') return 5;
  return 0;
}
