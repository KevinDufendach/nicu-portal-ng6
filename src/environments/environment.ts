// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyChiQ4vl0W6FVghoElBD4cHghEzstnvDUI',
    authDomain: 'smart-fhir-sandbox.firebaseapp.com',
    databaseURL: 'https://smart-fhir-sandbox.firebaseio.com',
    projectId: 'smart-fhir-sandbox',
    storageBucket: 'smart-fhir-sandbox.appspot.com',
    messagingSenderId: '271134181953'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
