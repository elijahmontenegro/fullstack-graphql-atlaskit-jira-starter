module.exports = {
  development: {
    clientID: process.env.ATLASSIAN_CLIENT_ID,
    clientSecret: process.env.ATLASSIAN_CLIENT_SECRET,
    callbackURL: process.env.ATLASSIAN_CALLBACK_URL,
    expireTime: process.env.OAUTH_EXPIRE_TIME,
    scope: process.env.ATLASSIAN_SCOPE,
    cloudID: process.env.JIRA_CLOUD_ID
  },
  production: {
    clientID: process.env.ATLASSIAN_CLIENT_ID,
    clientSecret: process.env.ATLASSIAN_CLIENT_SECRET,
    callbackURL: process.env.ATLASSIAN_CALLBACK_URL,
    expireTime: process.env.OAUTH_EXPIRE_TIME,
    scope: process.env.ATLASSIAN_SCOPE,
    cloudID: process.env.JIRA_CLOUD_ID
  },
};
