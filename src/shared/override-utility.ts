import * as CryptoJS from 'crypto-js';
export class OverrideUtils {
    static encryptPassword(password: string) {
        var decrypted = CryptoJS.AES.decrypt(password, process.env.JWT_SECRET);
        var value = decrypted.toString(CryptoJS.enc.Utf8);
        if (value) {
            return password;
        } else {
            const enc = CryptoJS.AES.encrypt(password, process.env.JWT_SECRET).toString();
            return enc;
        }
    }

    static dycreptPassword(password: string) {
        const bytes = CryptoJS.AES.decrypt(password, process.env.JWT_SECRET);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}