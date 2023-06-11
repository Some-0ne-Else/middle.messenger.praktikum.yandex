import { login } from "./login/context";
import { signup } from "./signup/context";
import { internalError } from "./internal-error/context";
import { notFound } from "./not-found/context";

export default {
  login,
  signup,
  internalError,
  notFound
}
