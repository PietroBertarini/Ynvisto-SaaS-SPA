import { IUserApiModel } from './User.types';

export interface IUser {
  expirationTokenTime: number;
  subscriptionValidityTime: number;
  spreadsheetId: string;
  role: string;
  userName: string;
}

export default class User implements IUser {
  /**
   * Expiration of Ynvisto token.
   */
  public readonly expirationTokenTime: number;

  /**
   * Expiration of Ynvisto signature.
   */
  public readonly subscriptionValidityTime: number;

  /**
   * spreadsheetId google docs.
   */
  public readonly spreadsheetId: string;

  /**
   * Role of user;
   */
  public readonly role: string;

  /**
   * Name of user.
   */
  public readonly userName: string;

  constructor(
    expirationTokenTime: number,
    subscriptionValidityTime: number,
    spreadsheetId: string,
    role: string,
    userName: string,
  ) {
    this.expirationTokenTime = expirationTokenTime;
    this.subscriptionValidityTime = subscriptionValidityTime;
    this.spreadsheetId = spreadsheetId;
    this.role = role;
    this.userName = userName;
  }

  public isAuth(): boolean {
    const today = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const remainExpirationDays = (this.expirationTokenTime - today.getTime()) / oneDay;
    return remainExpirationDays >= 0;
  }

  public needRefreshToken(): boolean {
    const today = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const remainExpirationTokenDays = (this.expirationTokenTime - today.getTime()) / oneDay;

    const remainExpirationSubscriptionDays = (this.subscriptionValidityTime - today.getTime()) / oneDay;
    return remainExpirationTokenDays <= 3 && remainExpirationSubscriptionDays >= 7;
  }

  /**
   * Construct the Authorization object that is consumed at SPA(Single Page App).
   * @param apiModel
   */
  static fromApiModel(apiModel: IUserApiModel) {
    const expirationTokenTime = new Date(Date.parse(apiModel.expiration)).getTime();
    const subscriptionValidityTime = new Date(Date.parse(apiModel.subscriptionValidity)).getTime();
    const { role } = apiModel;
    const { userName } = apiModel;
    const { spreadsheetId } = apiModel;
    return new User(expirationTokenTime, subscriptionValidityTime, spreadsheetId, role, userName);
  }

  /**
   * Construct the Authorization object that is consumed at SPA(Single Page App).
   * @param storage
   */
  static fromStorage(storage?: IUser): User | undefined {
    if (storage) {
      const {
        expirationTokenTime,
        role,
        subscriptionValidityTime,
        userName,
        spreadsheetId,
      } = storage;
      return new User(expirationTokenTime, subscriptionValidityTime, spreadsheetId, role, userName);
    }
    return undefined;
  }

  // TODO Pietro: Quando a aplicação começar e as coisas forem puxadas do local storage, é preciso converter os dados do
  // LS em objetos bonitos (https://github.com/rt2zz/redux-persist#transforms)
  // TODO Pietro: Remover esses metodos
}
