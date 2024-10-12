import {
  ShotstackRenderResponse,
  ShotstackStatusResponse
} from '@models/shotstack';
import { VideoParameters } from '@models/config';

import { template } from '@constants/template';
import fs from 'fs';
import { File, Files, Fields } from 'formidable';
import path from 'path';
import formidable from 'formidable';

const SHOTSTACK_API_URL = 'https://api.shotstack.io/ingest/v1';
const SHOTSTACK_API_KEY = process.env.SHOTSTACK_API_KEY || '';

type ShotstackUploadResponse = {
  data: {
    attributes: {
      id: string;
      url: string;
    };
  };
};

// Disable Next.js default body parsing for upload
export const uploadConfig = {
  api: {
    bodyParser: false
  }
};

const fetchUploadUrl = async (): Promise<{
  uploadId: string;
  signedUrl: string;
}> => {
  const response = await fetch(`${SHOTSTACK_API_URL}/upload`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'x-api-key': SHOTSTACK_API_KEY
    }
  });

  if (!response.ok) {
    throw new Error(`Error fetching signed URL: ${response.statusText}`);
  }

  const jsonResponse: ShotstackUploadResponse = await response.json();

  const uploadId: string = jsonResponse.data.attributes.id;
  const signedUrl: string = jsonResponse.data.attributes.url;

  return { uploadId, signedUrl };
};

const pollUploadStatus = async (uploadId: string): Promise<{ url: string }> => {
  const sourceUrl = `${SHOTSTACK_API_URL}/sources/${uploadId}`;
  const headers = {
    Accept: 'application/json',
    'x-api-key': SHOTSTACK_API_KEY
  };

  while (true) {
    const response = await fetch(sourceUrl, {
      method: 'GET',
      headers
    });

    if (!response.ok) {
      throw new Error(`Error fetching source details: ${response.statusText}`);
    }

    const data = await response.json();

    const status = data.data.attributes.status;
    if (status === 'ready') {
      return { url: data.data.attributes.source };
    } else if (status === 'failed') {
      throw new Error(`File upload failed for ID: ${uploadId}`);
    }

    // Wait before polling again
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
};

export const uploadFile = async (file: File): Promise<{ url: string }> => {
  try {
    const { uploadId, signedUrl } = await fetchUploadUrl();

    const fileStream = fs.createReadStream(file.filepath);
    const buffer = await streamToBuffer(fileStream);

    const uploadResponse = await fetch(signedUrl, {
      method: 'PUT',
      body: buffer
    });

    if (!uploadResponse.ok) {
      throw new Error(`Error uploading file: ${uploadResponse.statusText}`);
    }

    fs.unlinkSync(file.filepath);

    const sourceUrl = await pollUploadStatus(uploadId);

    return sourceUrl;
  } catch (error) {
    console.error(error);
    throw new Error('File upload process encountered an error.');
  }
};

async function streamToBuffer(stream: fs.ReadStream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on('data', chunk => chunks.push(Buffer.from(chunk)));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
}
