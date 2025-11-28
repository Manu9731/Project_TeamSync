import bcrypt from "bcrypt";

class Password{

    constructor(){
        this.saltRounds = 10;
    }

    async generatePassword(text){
        const hashedPassword =  await bcrypt.hash(text, this.saltRounds)
        return hashedPassword
    }

    async comparePassword(plainPassword, hashedPassword){
        const match = await bcrypt.compare(plainPassword, hashedPassword)
        return match
    }

}


export default new Password();
