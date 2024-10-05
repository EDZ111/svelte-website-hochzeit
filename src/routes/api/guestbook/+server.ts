import { json } from '@sveltejs/kit';
import { Deta } from 'deta';
import { SECRET_DETA_API_KEY } from '$env/static/private';
const deta = Deta(SECRET_DETA_API_KEY);
const comments = deta.Base('comments');

export async function GET() {
  const { items } = await comments.fetch();
  const entries = items.map(item => {
    if (item.imageId) {
      //console.log(item.imageId);
      
      const imageUrl = `/api/guestbook/image/${item.imageId}`;
      return { ...item, type: 'image', content: imageUrl };
    }
    return { ...item, type: 'comment', content: item.comment };
  });
  
  return json(entries);
}
export async function POST({ request }) {
  const data = await request.json();
  const result = await comments.put(data);
  return json(result);
}