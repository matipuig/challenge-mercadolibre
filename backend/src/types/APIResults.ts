/**
 * Contains the API results types.
 */

export interface APISuccessResponse {
  code: number;
  payload: unknown;
  success: true;
}

export interface APIErrorResponse {
  code: number;
  success: false;
  error: string;
  message: string;
}
