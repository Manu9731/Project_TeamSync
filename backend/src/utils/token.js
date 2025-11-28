import jwt from "jsonwebtoken";


class JWT{

    constructor(){
        this.secretKey = "temp"
        this.expires = "1d"
    }

    generateJwt(payload){
        return jwt.sign(payload, this.secretKey, {expiresIn:this.expires})
    }

    verifyJwt(token) {
    try {
        const decoded = jwt.verify(token, this.secretKey);
        return { valid: true, decoded };
    } catch (err) {
        return { valid: false, error: err.message };
    }
}


}


export default new JWT()

