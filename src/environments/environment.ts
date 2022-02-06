// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URLWeatherFirst :"http://api.openweathermap.org/data/2.5/weather?q=",
  URLWeatherLast:"&units=metric&appid=",
  APIKEY :"c7c88e9eb7ba27bcd35a6ba3aa28663b",
  URLCountry : "https://restcountries.com/v3.1",
  URLIcon:"http://openweathermap.org/img/wn/" 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
