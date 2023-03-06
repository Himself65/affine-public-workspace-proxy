import { NextApiHandler } from 'next'
import NextCors from 'nextjs-cors';

const handler: NextApiHandler = async (req, res) => {
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*'
  });
  const id = req.query.docId
  const response = await fetch('https://app.affine.pro/api/public/doc/' + id)
  const doc = await response.arrayBuffer()
  res.setHeader('Content-Type', 'application/octet-stream')
  res.write(Buffer.from(doc))
  res.end()
}

export default handler
