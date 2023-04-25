export type IMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export interface IBaseBody {
  method: IMethod;
  params: any;
}
