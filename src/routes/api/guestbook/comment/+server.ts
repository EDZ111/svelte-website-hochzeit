import { json } from '@sveltejs/kit';
import { Deta } from 'deta';
import { SECRET_DETA_API_KEY } from '$env/static/private';
const deta = Deta(SECRET_DETA_API_KEY);
const comments = deta.Base('comments');

export async function POST({ request }) {
  const data = await request.json();
  const result = await comments.put(data);
  return json(result);
}