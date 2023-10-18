/* eslint-disable import/no-anonymous-default-export */
import config from "@/configs/local.json";

export default async (): Promise<void> => {
  for (const [key, value] of Object.entries(config)) {
    console.log(`${key} : ${value}`);
    process.env[key] = String(value);
  }
};
