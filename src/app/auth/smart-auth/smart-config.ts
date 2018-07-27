// noinspection TsLint
// import {AuthConfig} from 'angular-oauth2-oidc-codeflow';

import {AuthConfig} from '../../../angular-oauth2-oidc/auth.config';

export const clientIdList = {
  epic_test: 'a0d973e2-baed-4808-ab27-03df890a33ce',
  epic_prod: 'eee61f0c-c910-4ff0-beb4-aec2f1f62f17',
  cerner: 'b75a2703-a5bd-4e78-aad6-46a7b00ed25d',
  smart_health_it: 'my-smart-health-it-client-id'
};

export interface VendorClientReference {
  url: string;
  clientId: string;
}

export const vendorClientReferences: VendorClientReference[] = [
  {
    url: '/assets/JSON-files/epicTestEndpoints.json',
    clientId: clientIdList.epic_test
  },
  {
    url: '/assets/JSON-files/epicEndpoints.json',
    clientId: clientIdList.epic_prod
  },
  {
    url: '/assets/JSON-files/cernerEndpoints.json',
    clientId: clientIdList.cerner
  },
  {
    url: '/assets/JSON-files/smartHealthItEndpoints.json',
    clientId: clientIdList.smart_health_it
  }
];

export const baseSmartAuthConfig: AuthConfig = {
  // https://manfredsteyer.github.io/angular-oauth2-oidc/docs/
  //         additional-documentation/configure-library-for-implicit-flow-without-discovery-document.html
  // Url of the Identity Provider
  // issuer: 'https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/',

  // Login-Url
  // loginUrl: 'https://open-ic.epic.com/Argonaut/oauth2/authorize',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/dashboard',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'a0d973e2-baed-4808-ab27-03df890a33ce',
  // clientId: 'eee61f0c-c910-4ff0-beb4-aec2f1f62f17',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'patient/*.read observation/*.read launch',

  /**
   * Defines whether to use OpenId Connect during implicit flow.
   */
  oidc: false,

  /**
   * Defines whether to request a access token during
   * implicit flow.
   */
  requestAccessToken: true,

  /**
   * Url of the token endpoint as defined by OpenId Connect and OAuth 2.
   */
  // tokenEndpoint: 'https://open-ic.epic.com/Argonaut/oauth2/token',

  /**
   * Defines whether https is required.
   * The default value is remoteOnly which only allows
   * http for localhost, while every other domains need
   * to be used with https.
   */
  requireHttps: 'remoteOnly',
  // requireHttps: false,

  /**
   * This property allows you to override the method that is used to open the login url,
   * allowing a way for implementations to specify their own method of routing to new
   * urls.
   */
  // openUri: ,
};

export const epicSmartAuthConfig: AuthConfig = {
  // https://manfredsteyer.github.io/angular-oauth2-oidc/docs/
  //         additional-documentation/configure-library-for-implicit-flow-without-discovery-document.html
  // Url of the Identity Provider
  issuer: 'https://open-ic.epic.com/argonaut/api/FHIR/Argonaut/',

  // Login-Url
  loginUrl: 'https://open-ic.epic.com/Argonaut/oauth2/authorize',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/landing',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'a0d973e2-baed-4808-ab27-03df890a33ce',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'patient/*.read observation/*.read launch',

  /**
   * Defines whether to use OpenId Connect during implicit flow.
   */
  oidc: false,

  /**
   * Defines whether to request a access token during
   * implicit flow.
   */
  requestAccessToken: true,

  /**
   * Url of the token endpoint as defined by OpenId Connect and OAuth 2.
   */
  tokenEndpoint: 'https://open-ic.epic.com/Argonaut/oauth2/token',

  /**
   * Defines whether https is required.
   * The default value is remoteOnly which only allows
   * http for localhost, while every other domains need
   * to be used with https.
   */
  // requireHttps: 'remoteOnly',
  requireHttps: false,

  /**
   * This property allows you to override the method that is used to open the login url,
   * allowing a way for implementations to specify their own method of routing to new
   * urls.
   */
  // openUri: ,
};

export const testAuthConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'spa-demo',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher',
};
