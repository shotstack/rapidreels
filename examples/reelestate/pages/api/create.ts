import type { NextApiRequest, NextApiResponse } from 'next';
import { VideoParameters } from '@models/config';
import { generateVideo } from '@services/shotstack';
import { uploadFile } from '@services/upload';
import formidable from 'formidable';

// Disable Next.js default body parsing if handling multipart/form-data
export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
      const form = formidable();

      form.parse(req, async (err, fields, files) => {
        if (err) {
          res.status(500).json({ error: 'Error parsing form data' });
          return;
        }

        const [image1, image2, image3, image4, image5, agentPhoto, agencyLogo] =
          await Promise.all([
            uploadFile(files.image1![0]),
            uploadFile(files.image2![0]),
            uploadFile(files.image3![0]),
            uploadFile(files.image4![0]),
            uploadFile(files.image5![0]),
            uploadFile(files.agentPhotoFile![0]),
            uploadFile(files.agencyLogoFile![0])
          ]);

        const videoConfig: VideoParameters = {
          imageUrls: [
            image1.url,
            image2.url,
            image3.url,
            image4.url,
            image5.url
          ],
          agentPhotoUrl: agentPhoto.url,
          agencyLogoUrl: agencyLogo.url,
          address: fields.address ? fields.address[0] : '',
          bedrooms: fields.bedrooms ? parseInt(fields.bedrooms[0]) : 0,
          bathrooms: fields.bathrooms ? parseInt(fields.bathrooms[0]) : 0,
          cars: fields.cars ? parseInt(fields.cars[0]) : 0,
          suburb: fields.suburb ? fields.suburb[0] : '',
          state: fields.state ? fields.state[0] : '',
          postcode: fields.postcode ? fields.postcode[0] : '',
          propertyType: fields.propertyType ? fields.propertyType[0] : '',
          price: fields.price ? fields.price[0] : '',
          agentName: fields.agentName ? fields.agentName[0] : '',
          agentEmail: fields.agentEmail ? fields.agentEmail[0] : '',
          style: fields.style ? fields.style[0] : 'flat-panel',
          color: fields.color ? fields.color[0] : 'white',
          primaryColor: fields.primaryColor
            ? fields.primaryColor[0]
            : '#f0c20c',
          secondaryColor: fields.secondaryColor
            ? fields.secondaryColor[0]
            : '#ffffff'
        };

        const id = await generateVideo(videoConfig);

        res.status(201).json({ id });
      });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
      console.log('POST /create - Error:', (error as Error).message);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
