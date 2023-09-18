import { useLoading } from "@/states/loadingStore";
import { useMessage } from "@/states/messageStore";
import { AxiosError } from "axios";

export const showWhile = async (
  callback: () => Promise<void>
): Promise<void> => {
  const { show, hide } = useLoading();
  try {
    show();
    await callback();
    hide();
  } catch (error) {
    console.log("catch the error");
    hide();
    throw error;
  }
};

type OnError = (error: Error) => void;

class ErrorHandler {
  onError: OnError;

  constructor() {
    console.log("ErrorHandler constructor");
    this.onError = (): void => {
      // No operation until set
    };
  }

  setOnError(callback: OnError): void {
    this.onError = callback;
  }

  handleError(error: Error): void {
    this.onError(error);
  }
}

const errorHandler = new ErrorHandler();

export const handleError = (error: Error): void => {
  errorHandler.handleError(error);
};

export const setOnError = (callback: OnError): void => {
  errorHandler.setOnError(callback);
};

type Result = {
  status?: number;
  message?: string;
  axiosError?: AxiosError;
};

export const parseApiError = (error: unknown): Result => {
  if (!isAxiosError(error)) {
    return {};
  }

  const { message, response } = error;
  if (!response) {
    return { message, axiosError: error };
  }

  const { status } = response;

  return { status, message, axiosError: error };
};

const isAxiosError = (error: unknown): error is AxiosError => {
  if (!error) {
    return false;
  }

  return (error as AxiosError).isAxiosError;
};
