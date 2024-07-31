import { Deta } from 'deta';
import { SECRET_DETA_API_KEY } from '$env/static/private';

const deta = Deta(SECRET_DETA_API_KEY);
const images = deta.Drive('images');

export async function GET({ params }) {
  const { filename } = params;
  const file = await images.get(filename);
  
  if (!file) {
    return new Response('Image not found', { status: 404 });
  }

  // Set appropriate headers
  const headers = new Headers();
  headers.set('Content-Type', file.type || 'application/octet-stream');
  headers.set('Content-Disposition', `inline; filename="${filename}"`);

  return new Response(file, { headers });
}