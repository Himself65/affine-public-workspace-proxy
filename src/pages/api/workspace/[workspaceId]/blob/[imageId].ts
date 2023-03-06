import { NextApiHandler } from 'next'
import NextCors from 'nextjs-cors';

const handler: NextApiHandler = async (req, res) => {
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*'
  });
  const workspaceId = req.query.workspaceId
  const imageId = req.query.imageId
  const response = await fetch(`https://app.affine.pro/api/workspace/${workspaceId}/blob/${imageId}`)
  const image = await response.arrayBuffer()
  res.setHeader('Content-Type', 'application/octet-stream')
  res.write(Buffer.from(image))
  res.end()
}

export default handler
