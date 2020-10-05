import cookie from 'js-cookie';
// This file help store token as a cookie in the localStorage

// Set cookie on login

export const setCookie = (key, value) => {
  if (window !== undefined) {
    cookie.set(key, value, {
      expires: 1
    });
  }
}

// Remove cookie on logout

export const removeCookie = (key) => {
  if (window !== undefined) {
    cookie.remove(key, {
      expires: 1
    });
  }
}

// Get from cookie such as stored token, will be needed to make request with the jwt

export const getCookie = (key) => {
  if (window !== undefined) {
    return cookie.get(key);
  }
}

// Set in localStorage

export const setLocalStorage = (key, value) => {
  if (window !== undefined) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

// Remove from localStorage

export const removeLocalStorage = (key) => {
  if (window !== undefined) {
    localStorage.removeItem(key);
  }
}

// Authenticate user by passing data to cookie and localStorage during login

export const authenticate = (response, next) => {
  setCookie('token', response.data.token);
  setLocalStorage('user', response.data.user);
  next();
}

// Access user info from localStorage

export const isAuthenticated = () => {
  if (window !== undefined) {
    const cookieChecked = getCookie('token');
    console.log('cookieChecked', cookieChecked);

    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
      }
      else {
        return false
      }
    }
  }
}

export const logout = next => {
  removeCookie('token');
  removeLocalStorage('user');
  next();
}

// Create function that will update user information in real time after doing a put request

export const updateUser = (response, next) => {
  if (typeof window !== 'undefined') {
    // ? Why need the code below ?
    // let user = JSON.parse(localStorage.getItem('user'));
    const user = response.data;
    localStorage.setItem('user', JSON.stringify(user));
  }
  // Acts as middleware
  next();
}