import type { NextApiRequest, NextApiResponse } from 'next';
import { pollVideoStatus } from '@services/shotstackService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Origin', 'https://shotstack.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    try {
      const { id } = req.query as { id: string };
      const status = await pollVideoStatus(id);
      res.status(200).json(status);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
      console.log('GET /status - Error:', (error as Error).message);
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
