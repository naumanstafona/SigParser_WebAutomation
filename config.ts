process.env.ENVIRONMENT = 'dev';

interface Config {
  url: string;
  email: string;
  password: string;
}

const devConfig: Config = {
  url: 'https://beta-app.sigparser.com',
  email: process.env.DEV_EMAIL || 'test+stafona+haseeb@dragnettech.com',
  password: process.env.DEV_PASSWORD || 'Panda@2024'
};

const stageConfig: Config = {
  url: 'https://hotfix.sigparser.com',
  email: process.env.PROD_EMAIL || 'test+stafona+haseeb@dragnettech.com',
  password: process.env.PROD_PASSWORD || 'Panda@2024'
};

const config = process.env.ENVIRONMENT === 'stage' ? stageConfig : devConfig;

export default config;