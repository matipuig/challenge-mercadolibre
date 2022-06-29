/**
 * Contains the API results types.
 */

export interface APIErrorResponse {
  code: number;
  success: false;
  error: string;
  message: string;
}
