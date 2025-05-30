import mongoose from "mongoose";

export class HttpError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export const mongooseErrorMessages = new Map<Function, string>([
  [mongoose.Error.ValidationError, "Schema validation failed"],
  [mongoose.Error.CastError, "Invalid ID format"],
  [mongoose.Error.DocumentNotFoundError, "Document not found"],
  [mongoose.Error.OverwriteModelError, "Model name already exists"],
  [
    mongoose.Error.ParallelSaveError,
    "Parallel save error - multiple saves on same document",
  ],
  [mongoose.Error.StrictModeError, "Strict mode violation"],
  [mongoose.Error.VersionError, "Versioning error - conflict detected"],
  [mongoose.Error.MissingSchemaError, "Missing schema - model not registered"],
]);
