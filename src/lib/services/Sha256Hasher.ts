import type IPasswordHasher from "./IPasswordHasher";

export default class Sha256Hasher implements IPasswordHasher{
    
    
   async encryptString(string: string): Promise<string> {
        // encode as UTF-8
        const msgBuffer = new TextEncoder().encode(string);
    
        // hash the message
        const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    
        // convert ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashBuffer));
    
        // convert bytes to hex string
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
        return hashHex;
    }
    

}