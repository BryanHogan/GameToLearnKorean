import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'game.tolearnkorean.com',
  appName: 'gametolearnkorean',
  webDir: 'build',
  server: {
    url: 'http://10.0.2.2:5173',
    cleartext: true
  }
};

export default config;