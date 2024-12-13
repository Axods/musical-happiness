import type { BaseResponse } from './types';

export function createSuccessResponse<T>(data: T): BaseResponse<T> {
  return {
    data,
    error: null
  };
}

export function createErrorResponse<T>(error: string): BaseResponse<T> {
  return {
    data: null,
    error
  };
}