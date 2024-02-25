

export default interface IAuthenticationService {
  verifyPassword(password: string): Promise<boolean>;
  calculateExponentialBackoffDelay(): Promise<number>;
}
