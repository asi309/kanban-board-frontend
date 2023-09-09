import type { NextApiRequest, NextApiResponse } from 'next';

import { KANBAN_API } from '@import/constants/url';

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(`${KANBAN_API}/boards`, { method: 'GET' });
  const responseJson = await response.json();
  console.log(responseJson);
  return res.status(200).json(responseJson);
};

export { GET };
