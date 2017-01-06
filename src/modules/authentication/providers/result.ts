export enum ResultCode {
  FAILURE,
  SUCCESS
};

export class Result {
  constructor(private code: number, private identity?: any) {}

  isValid() {
    return this.code > 0;
  }

  getCode(): number {
    return this.code;
  }

  getIdentity() {
    return this.identity;
  }
}
