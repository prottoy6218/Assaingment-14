import { CheckCookieAuth } from "@/app/utility/MiddlewareUtility";
//Before going to dashboard it will check if my browser is logged in i mean there is any tote in browser second logic will check if want to verify then of course i need token check if no token then ask to login in both cases
export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await CheckCookieAuth(req);
  }
  if (req.nextUrl.pathname.startsWith("/varify")) {
    return await CheckCookieAuth(req);
  }
}
