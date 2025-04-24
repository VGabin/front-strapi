'use client';
import Cookies from 'js-cookie';

// clef cookie
const TOKEN_KEY = 'jwt';

export function setToken(token: string) {
  // expire in 7 days
  Cookies.set(TOKEN_KEY, token, { expires: 7, sameSite: 'lax' });
}

export function getToken() {
  return Cookies.get(TOKEN_KEY);
}

export function removeToken() {
  Cookies.remove(TOKEN_KEY);
}
