export enum ResultCode {
  FAILURE,
  SUCCESS
};

export class Result { 
  constructor(private code: number, private identity?: any) {}

  getCode(): number {
    return this.code;
  }

  getIdentity() {
    return this.identity;
  }
}
