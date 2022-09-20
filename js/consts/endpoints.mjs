// Noroff API to be used in project
export const BASE_URL = 'https://nf-api.onrender.com';

// Authentication endpoints
export const registerURL = '/api/v1/social/auth/register';
export const loginURL = '/api/v1/social/auth/login';

// Post related endpoints
export const postsURL = '/api/v1/social/posts/';

export const sortDesc = '/api/v1/social/posts?sort=created&sortOrder=desc';
export const sortAsc =  '/api/v1/social/posts?sort=title&sortOrder=asc';