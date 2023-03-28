import Cookies from 'js-cookie';

export function AuthHeader() {
  const token = Cookies.get('auth_token');
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}