export const hostname = window.location.hostname;

export const api = {
  localhost: 'http://localhost:5000/api',
  'testing.jira.com': 'https://testing.jira.com/api',
};

const apiBase = api[hostname];

export default apiBase;
