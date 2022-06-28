/**
 * Extension of the Error class with a code specification.
 */
import stacktrace from 'stack-trace';

import CODES from './codes';

type ErrorCode = keyof typeof CODES;
type Context = Record<string, unknown>;

const getStack = (): string => {
  const err = new Error();
  const trace = stacktrace.parse(err);
  let tmpFuncion;
  let tmpName;
  let tmpCol;
  let tmpRow;
  let tmpLocation;

  const arrTrace = trace.map((e) => {
    tmpFuncion = e.getMethodName() || e.getFunctionName() || 'Anonymous Function | Promise';
    tmpName = e.getFileName() || '';
    tmpRow = e.getLineNumber() || '';
    tmpCol = e.getColumnNumber() || '';
    tmpLocation = `${tmpRow}:${tmpCol}`;
    return `${tmpFuncion} (${tmpName} ${tmpLocation})`;
  });
  return arrTrace.join('\r\n at ');
};

/**
 * Error with code. Extended from class Error.
 */
class CodedError extends Error {
  static CODES = CODES;

  /**
   * Error code.
   */
  code: ErrorCode = 'NOT_DEFINED';

  /**
   * Error message.
   */
  message = '';

  /**
   * Replaces to insert in the final message.
   */
  replaces: string[] = [];

  /**
   * Context of the error.
   */
  context: Context = {};

  /**
   * Error stack trace.
   */
  trace: string | undefined = '';

  /**
   * Contains if is a coded error.
   */
  readonly isCodedError = true;

  /**
   * Constructs a new error.
   * @param code Code for the error.
   * @param context Context of the error.
   */
  constructor(code: ErrorCode, context: Context = {}) {
    super(code);
    this.code = code;
    this.message = code;
    this.context = context;
    this.trace = getStack();
  }

  /**
   * Creates a coded Error from an error. Tries to figure out if it has a code in the message.
   * @param error Error to create the error from.
   */
  static fromError(error: Error | CodedError): CodedError {
    if (this.isCodedError(error)) {
      return error;
    }
    const possibleCodes = Object.keys(CODES);
    const errorCode: ErrorCode = possibleCodes.includes(error.message)
      ? (error.message as ErrorCode)
      : CODES.NOT_DEFINED;
    return new CodedError(errorCode, { originalError: error });
  }

  /**
   * Returns if the errors is a coded error or not.
   * @param error Thing to check if is a coded error or not.
   */
  static isCodedError(error: Error | CodedError): error is CodedError {
    const codedError = error as CodedError;
    if (!codedError.isCodedError) {
      return false;
    }
    return true;
  }
}

export { CodedError, CODES };

export default { CodedError, CODES };
