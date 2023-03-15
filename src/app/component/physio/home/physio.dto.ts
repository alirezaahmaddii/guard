export interface IPhysioLogin {
    email: string,
    password: string,
}
export interface ILoginRes {
  status: number,
  result: {
    token: string,
  }
}
