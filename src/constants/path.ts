enum PATHNAME {
  ROOT = 'ROOT',
  SIGNUP = 'SIGNUP',
  LOGIN = 'LOGIN',
  PROFILE = 'PROFILE',
  PROFILE_EDIT = 'PROFILE_EDIT',
  PROFILE_PASSWORD = 'PROFILE_PASSWORD',
  CHAT = 'CHAT',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  NOT_FOUND = 'NOT_FOUND',
}

const PATH = {
  [PATHNAME.ROOT]: '/',
  [PATHNAME.SIGNUP]: '/signup',
  [PATHNAME.LOGIN]: '/login',
  [PATHNAME.PROFILE]: '/profile',
  [PATHNAME.PROFILE_EDIT]: '/profile-edit',
  [PATHNAME.PROFILE_PASSWORD]: '/profile-password',
  [PATHNAME.CHAT]: '/chat',
  [PATHNAME.INTERNAL_ERROR]: '/emulate500',
  [PATHNAME.NOT_FOUND]: '/random-url',
};

export default PATH;
