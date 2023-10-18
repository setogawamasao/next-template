type AppConfig = {
  appHost: string;
  apiHost: string;
  authHost: string;
  authClient: string;
  timeoutMinutes: number;
};

export const getAppConfig = (): AppConfig => {
  if (
    process.env.APP_HOST &&
    process.env.API_HOST &&
    process.env.AUTH_HOST &&
    process.env.AUTH_CLIENT &&
    process.env.API_TIMEOUT_MINUTES
  ) {
    return {
      appHost: process.env.APP_HOST,
      apiHost: process.env.API_HOST,
      authHost: process.env.AUTH_HOST,
      authClient: process.env.AUTH_CLIENT,
      timeoutMinutes: Number(process.env.API_TIMEOUT_MINUTES),
    };
  } else {
    throw new Error("Config Invalid");
  }
};
