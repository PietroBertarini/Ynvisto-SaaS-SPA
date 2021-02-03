import { IAssetsRights } from './IRPF.api';

export interface IRPF {
  assetsRights: IAssetsRights[],
}

export enum EIrpfTypes {
  GET_ASSETS_RIGHTS = 'GET_ASSETS_RIGHTS',
}

export interface IGetAssetsRights {
  type: typeof EIrpfTypes.GET_ASSETS_RIGHTS,
}

export type MyIRPFActionTypes = IGetAssetsRights;

export const getAssetsRightsAction = () : IGetAssetsRights => ({
  type: EIrpfTypes.GET_ASSETS_RIGHTS,
});
