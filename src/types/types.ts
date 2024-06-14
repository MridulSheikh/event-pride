export interface JwtPayload {
  email: string; // custom claim (user email)
  iat: number; // issued at
  exp: number; // expiration
}
