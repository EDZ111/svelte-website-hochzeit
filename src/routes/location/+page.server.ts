import { SECRET_MAP_LIBRE_API } from '$env/static/private';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        api_key:SECRET_MAP_LIBRE_API,
        
        
    };
}