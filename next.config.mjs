/** @type {import('next').NextConfig} */
import withOutray from '@outray/next';
// const nextConfig = {
//   /* config options here */
// };

// export default nextConfig;

export default withOutray(
  {

  },
  {
    subdomain: 'textcognito',
    apiKey: process.env.OUTRAY_API_KEY,
  },
  {
    enabled: process.env.EXPOSE_TUNNEL === 'false',
  }
)
