import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function dateParseChallenge(key: string, val: any) {
  if (typeof val === "string") {
    const time = Date.parse(val);
    if (!Number.isNaN(time)) {
      return new Date(time);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return val;
}

const client = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 60 * 1000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformResponse: (data: any) => {
    if (typeof data === "string") {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return JSON.parse(data, dateParseChallenge);
      } catch (e) {
        // Ignore error
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
  },
});

export { client };
