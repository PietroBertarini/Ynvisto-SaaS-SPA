export enum ELabelColors {
  ACOES = 'Ações',
  ETF = 'ETF',
  OPCAO = 'Opção',
  CRYPTO = 'Crypto',
  FII = 'FII',
  BDR = 'BDR',
  SUBSCRIPTION = 'Subscrição',
  INTERNATIONAL = 'Internacional',
}

export function handleTitle(title: string): ELabelColors {
  switch (title) {
    case 'Acoes':
      return ELabelColors.ACOES;
    case 'Etf':
      return ELabelColors.ETF;
    case 'Options':
      return ELabelColors.OPCAO;
    case 'Crypto':
      return ELabelColors.CRYPTO;
    case 'Fii':
      return ELabelColors.FII;
    case 'BDR':
      return ELabelColors.BDR;
    case 'SubscriptionRight':
      return ELabelColors.SUBSCRIPTION;
    case 'International':
      return ELabelColors.INTERNATIONAL;
    default: return ELabelColors.ACOES;
  }
}
