import { Config } from 'sls-config-parser';

if (!process.env.STAGE) {
  const defaultCfg = new Config({})

  const envs = defaultCfg.env();
  Object.keys(envs).forEach(key => {
    process.env[key] = envs[key];
  });
}
export default {};
