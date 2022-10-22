// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'adamieve39'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-5b7fsfjzg6xb5tms.us.auth0.com',            // Auth0 domain
  clientId: 'mCfWDBLYbhJ6VrtNs6uDe7tXCSr62bUr',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
