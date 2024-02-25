export default interface IPasswordHasher{

    encryptString(string:string):Promise<string>;
    
}