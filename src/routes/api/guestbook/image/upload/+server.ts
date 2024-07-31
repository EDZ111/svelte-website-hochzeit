import { json } from '@sveltejs/kit';
import { Deta } from 'deta';
import { SECRET_DETA_API_KEY } from '$env/static/private';
import Sha256Hasher from '$lib/services/Sha256Hasher.js';

const deta = Deta(SECRET_DETA_API_KEY);
const images = deta.Drive('images');
const hasher = new Sha256Hasher();

export async function POST({ request }) {
  const formData = await request.formData();
  const image = formData.get('image') as File;

  if (!image) {
    return json({ error: 'No image provided' }, { status: 400 });
  }

  const buffer = await image.arrayBuffer();
  const filename = `${Date.now()}_${image.name}`;
  const hashedFilename = await hasher.encryptString(filename);
const split = filename.split('.');
const extension = split[split.length - 1]; // Get the last element (file extension)
const newFilename = `${hashedFilename}.${extension}`;
  // Convert ArrayBuffer to Buffer
  const nodeBuffer = Buffer.from(buffer);

  // Use the correct type for put options
  await images.put(newFilename, { data: nodeBuffer, contentType: image.type });

  // Generate a public URL for the image
  const imageUrl = `/api/guestbook/image/${newFilename}`;

  return json({ imageUrl, id: newFilename });
}