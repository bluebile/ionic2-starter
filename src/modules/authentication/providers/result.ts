export enum ResultCode {
  FAILURE,
  SUCCESS
};

export class Result {
  constructor(private code: number, private identity?: any, private data?: Object) {}

  isValid() {
    return this.code > 0;
  }

  getData() {
    return this.data;
  }

  getCode(): number {
    return this.code;
  }

  getIdentity() {
    return this.identity;
  }
}
