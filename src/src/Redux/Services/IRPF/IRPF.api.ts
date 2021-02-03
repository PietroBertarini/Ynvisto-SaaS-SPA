interface IAssetsRightsApiModel {
  ticker: string;
  code: number;
  location: string;
  situation20: number;
  situation21: number;
  discrimitation: string;
}

export interface IRPFApiModel {
  assetsRights: IAssetsRightsApiModel[],
}

export interface IAssetsRights {
  ticker: string;
  code: number;
  location: string;
  situation20: number;
  situation21: number;
  discrimitation: string;
}

/**
 * Get all IRPF from api.
 */
export function getAssetsRights(): IAssetsRights[] {
  return [
    {
      ticker: 'AMBR11',
      code: 9,
      location: '249 - Estados Unidos',
      situation20: 1864.03,
      situation21: 105102.53,
      discrimitation: 'Alguma descrição',
    },
    {
      ticker: 'ITAU5',
      code: 9,
      location: '105 - Brasil',
      situation20: 12359.95,
      situation21: 16120.53,
      discrimitation: 'Alguma descrição2',
    },
    {
      ticker: 'BBSE12',
      code: 9,
      location: '105 - Brasil',
      situation20: 3495.30,
      situation21: 4495.35,
      discrimitation: 'Alguma descrição3',
    },
  ];
}
