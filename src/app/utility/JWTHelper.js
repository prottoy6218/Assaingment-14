import { SignJWT, jwtVerify } from "jose";
//CreateToken()  Here the token is created and the secret key is encode  and the token is returned
export async function CreateToken(email) {
    const secret = new TextEncoder().encode(process.env.jWT_SECRET);
    let token = await new SignJWT({email: email})
        .setProtectedHeader({alg:'HS256'})
        .setIssuedAt()
        .setIssuer(process.env.JWT_ISSUER)
        .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
        .sign(secret);
    return token;
}


//Here is the creation token received, The token has been verified and decrypted
export async function VerifyToken(token) {
    const secret = new TextEncoder().encode(process.env.jWT_SECRET);
    const decoded=await jwtVerify(token,secret)
    return decoded['payload']
}