/**
 * Contains common types for services.
 */

export interface APISuccessResult<Payload> {
  success: true;
  code: number;
  payload: Payload;
}

export interface APIErrorResult {
  success: false;
  code: number;
  description: string;
}

export type APIResult<Payload, ErroredPayload> =
  | APISuccessResult<Payload>
  | APIErrorResult<ErroredPayload>;
