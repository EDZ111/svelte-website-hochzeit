import type IAuthenticationService from "$lib/services/IAuthenticationService";
import type IPasswordHasher from "$lib/services/IPasswordHasher";

export default class AuthenticationService implements IAuthenticationService {
  constructor(private passwordHasher: IPasswordHasher, private correctPassword: string) {}

  public authenticationAttempts: number = 0;
  public userIsLoggedIn: boolean = false;

  public async verifyPassword(userProvidedPassword: string): Promise<boolean> {
    
    const userProvidedPasswordHash: string = await this.passwordHasher.encryptString(userProvidedPassword);
    const correctPasswordHash: string = await this.passwordHasher.encryptString(this.correctPassword);
    
    if (userProvidedPasswordHash === correctPasswordHash) {
      this.userIsLoggedIn = true;
      return true;
    } else {
      this.userIsLoggedIn = false;
      this.authenticationAttempts++;
      return false;
    }
  }

  public async calculateExponentialBackoffDelay(): Promise<number> {
    const baseDelay = 1000;
    
    return (baseDelay * Math.pow(2, this.authenticationAttempts+1)) / 1000;
  }
}
