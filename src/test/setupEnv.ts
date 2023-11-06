/* eslint-disable import/no-anonymous-default-export */
import config from "@/configs/local.json";

export default async (): Promise<void> => {
  for (const [key, value] of Object.entries(config)) {
    process.env[key] = String(value);
  }
};
