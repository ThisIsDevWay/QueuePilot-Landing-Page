import type {NextConfig} from 'next';

const repositoryName = 'QueuePilot-Landing-Page';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: `/${repositoryName}`,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
