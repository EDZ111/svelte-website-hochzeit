
import { SECRET_DETA_API_KEY, SECRET_PW_LOGIN } from '$env/static/private';
import type { LayoutServerLoad } from "./$types.d.ts";
// Avoid directly importing secrets here
import { env } from '$env/dynamic/private';

function fetchSecretFromSecureStore(secretName: string): string{
  const retVal= env[secretName];
  if(retVal){
    return retVal;
  }
  return "";
}
export const load: LayoutServerLoad = ({ params }) => {
  // Retrieve secrets securely on the server-side
  const basePw = fetchSecretFromSecureStore("SECRET_DETA_API_KEY");
  const loginPw = fetchSecretFromSecureStore("SECRET_PW_LOGIN");

  return {
    base_pw: basePw,
    login_pw: loginPw,
  };
};