import {
  ShotstackRenderResponse,
  ShotstackStatusResponse
} from '@models/shotstack';
import { VideoParameters } from '@models/config';

import { template } from '@constants/template';

const SHOTSTACK_API_URL = 'https://api.shotstack.io/edit/v1';
const SHOTSTACK_API_KEY = process.env.SHOTSTACK_API_KEY || '';

export const generateVideo = async (
  configData: VideoParameters
): Promise<string> => {
  console.info('Start video generation ...');

  const merge = [
    { find: 'address', replace: configData.address },
    { find: 'suburb', replace: configData.suburb },
    { find: 'state', replace: configData.state },
    { find: 'postcode', replace: configData.postcode },
    { find: 'bedrooms', replace: configData.bedrooms.toString() },
    { find: 'bathrooms', replace: configData.bathrooms.toString() },
    { find: 'cars', replace: configData.cars.toString() },
    { find: 'price', replace: configData.price },
    { find: 'propertyType', replace: configData.propertyType },
    { find: 'agentName', replace: configData.agentName },
    { find: 'agentEmail', replace: configData.agentEmail },
    { find: 'agentPicture', replace: configData.agentPhotoUrl },
    { find: 'agencyLogo', replace: configData.agencyLogoUrl },
    { find: 'image1', replace: configData.imageUrls[0] },
    { find: 'image2', replace: configData.imageUrls[1] },
    { find: 'image3', replace: configData.imageUrls[2] },
    { find: 'image4', replace: configData.imageUrls[3] },
    { find: 'image5', replace: configData.imageUrls[4] },
    { find: 'overlayStyle', replace: configData.style },
    { find: 'overlayColor', replace: configData.color },
    { find: 'primaryColor', replace: configData.primaryColor },
    { find: 'secondaryColor', replace: configData.secondaryColor }
  ];

  const payload = {
    ...template,
    merge
  };

  const response = await fetch(`${SHOTSTACK_API_URL}/render`, {
    method: 'POST',
    headers: {
      'x-api-key': SHOTSTACK_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to generate video');
  }

  const data = await response.json();

  return data.response.id;
};

export const pollVideoStatus = async (
  id: string
): Promise<{ status: string; url?: string }> => {
  const VIDEO_STATUS_URL = `${SHOTSTACK_API_URL}/render/${id}`;

  const response = await fetch(VIDEO_STATUS_URL, {
    method: 'GET',
    headers: {
      'x-api-key': SHOTSTACK_API_KEY,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch video status');
  }

  const data: ShotstackStatusResponse = await response.json();

  const { status, url } = data.response;
  return { status, url };
};
