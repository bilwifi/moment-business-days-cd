'use strict';


if (typeof require === 'function') {
  var moment = require('moment-business-days');
}

moment.locale('fr');

moment.updateLocale('fr', {
  holidays: [
    '01/01', // 'Jour de l'An',
    '04/01', // 'Journée des Martyrs',
    '16/01', // 'Fête des Héros Nationaux (Laurent Kabila)',
    '17/01', // 'Fête des Héros Nationaux (Patrice Lumumba)',
    '01/05', // 'Fête du Travail',
    '17/05', // 'Journée de la Libération',
    '30/06', // 'Jour de l'Indépendance',
    '01/08', // 'Journée des Parents',
    '25/12', // '	Jour de Noël',
  ],
  holidayFormat: 'DD/MM',
});


/**
 * Add an holiday.
 * @param dateDDMM: string rapresenting the date in DD/MM format.
 * @param holiday: holiday's name.
 */
//moment.fn.addHoliday = function(dateDDMM, holiday) {
moment.addHoliday = function(dateDDMM) {
  let locale = this.localeData();

  locale._holidays.push(dateDDMM);
};




if (typeof module != 'undefined' && module.exports) {
    module.exports = moment;
}
