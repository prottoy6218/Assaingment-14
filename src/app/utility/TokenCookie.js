import {CreateToken} from "@/app/utility/JWTHelper";
import { cookies } from 'next/headers'
// The token is fetched from the token created in the JWT helper file and stored in setCookies.And an email has been passed that JWTHelper file
export async function TokenCookie(email) {
   let token = await CreateToken(email);
   return {'Set-Cookie': `token=${token}; Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict`}
}
