// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production',
        token: process.env.SANITY_API_TOKEN
}

export default function createComment(
    
req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({ name: 'John Doe' })
}
