
import { SECRET_DETA_API_KEY, SECRET_PW_LOGIN } from '$env/static/private';

import type { PageLoad } from './$types';

import { json } from '@sveltejs/kit';
export  const load: PageLoad = ({ params }) => {
    return {
        base_pw:SECRET_DETA_API_KEY,
        login_pw:SECRET_PW_LOGIN,
        

    };

}
