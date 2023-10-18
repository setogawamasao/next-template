/* eslint-disable import/no-anonymous-default-export */
import { loadEnvConfig } from "@next/env";

export default async (): Promise<void> => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};
