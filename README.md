# moment-business-days-cd
Ceci est un plugin momentJS qui vous permet d'utiliser uniquement les jours ouvrables (du lundi au vendredi) avec les jours fériés congolais

**NOTES:**
* Ce plugin  est une personalisation de [moment-business-days-it](https://github.com/elrancid/moment-business-days-it)
* Ce plugin utilise [moment-business-days](https://github.com/kalmecak/moment-business-days).
* Ce plugin définit les paramètres régionaux Français (fr), le format (DD / MM) et les jours fériés congolais officiels.
* Il est possible d'ajouter des jours fériés personnalisés (pour les jours fériés locaux ou de district) au format fr (DD/MM).
* Pour la documentation, voir [moment-business-days](https://www.npmjs.com/package/moment-business-days) and [moment](https://momentjs.com/docs/).

## Installer

````bash
// Pour NodeJS
$ npm install moment-business-days-cd
// ou installez et enregistrez sur package.json 
$ npm install --save moment-business-days-cd

````

## Comment utiliser

````javascript
// NodeJS
var moment = require('moment-business-days-cd');
// Vous pourrez utiliser moment et moment-business-days.js comme vous le faites normalement

// Navigateur 
// Ajouter après moment.js et la bibliothèque moment-business-days.js 
<script src="moment.js"></script>
<script src="moment-business-days.js"></script>
<script src="moment-business-days-cd.js"></script>
````

### Ajouter des vacances personnalisées

````javascript
var moment = require('moment-business-days-cd');

moment.addHoliday('25/05'); // 'custom  holiday' on 25 Mai (DD/M)

/*

 holidays: [
    '01/01', // 'Jour de l'An',
    '04/01', // 'Journée des Martyrs',
    '16/01', // 'Fête des Héros Nationaux (Laurent Kabila)',
    '17/01', // 'Fête des Héros Nationaux (Patrice Lumumba)',
    '01/05', // 'Fête du Travail',
    '17/05', // 'Journée de la Libération',
    '30/06', // 'Jour de l'Indépendance',
    '01/08', // 'Journée des Parents',
    '25/12', // 'Jour de Noël',
 ]
*/
````

### Exécuter des tests

`npm test`

## Méthodes du [moment-business-days](https://www.npmjs.com/package/moment-business-days)

**businessAdd(days)**

Ajoutera uniquement les jours ouvrables sauf samedi et dimanche, renverra un objet de date de moment:

```javascript
// 30-01-2020 is Friday, DD-MM-YYYY is the format
moment('30-01-2020', 'DD-MM-YYYY').businessAdd(3)._d // Wed Feb 04 2020 00:00:00 GMT-0600 (CST)
```

**businessSubtract(days)**

Soustrayera uniquement les jours ouvrables sauf samedi et dimanche, renverra un objet de date de moment:

```javascript
// 27-01-2020 is Tuesday, DD-MM-YYYY is the format
moment('27-01-2020', 'DD-MM-YYYY').businessSubtract(3)._d // Thu Jan 22 2020 00:00:00 GMT-0600 (CST)
```

**isBusinessDay()**

Vérifiez si la date est un jour ouvrable et renvoyez  **true**/**false**:

```javascript
// 31-01-2020 is Saturday
moment('31-01-2020', 'DD-MM-YYYY').isBusinessDay() // false

// 30-01-2020 is Fridat
moment('30-01-2020', 'DD-MM-YYYY').isBusinessDay() // true
```

**nextBusinessDay()**

Récupère la prochaine date commerciale en tant qu'objet de date moment:

```javascript
//Next busines day of Friday 30-01-2020
moment('30-01-2020', 'DD-MM-YYYY').nextBusinessDay()._d // Mon Feb 02 2020 00:00:00 GMT-0600 (CST)

//Next busines day of Monday 02-02-2020
moment('02-02-2020', 'DD-MM-YYYY').nextBusinessDay()._d //Tue Feb 03 2020 00:00:00 GMT-0600 (CST)
```

**prevBusinessDay()**

Récupère la date commerciale précédente en tant qu'objet de date moment:

```javascript
//Previous busines day of Monday 02-02-2020
moment('02-02-2020', 'DD-MM-YYYY').prevBusinessDay()._d // Fri Jan 30 2020 00:00:00 GMT-0600 (CST)

//Previous busines day of Tuesday 03-02-2020
moment('03-02-2020', 'DD-MM-YYYY').prevBusinessDay()._d //Mon Feb 02 2020 00:00:00 GMT-0600 (CST)
```

**monthBusinessDays()**

Récupérez un tableau des jours ouvrés du mois, chacun est un objet moment.



```javascript
//Busines days in month January 2020
moment('01-01-2020', 'DD-MM-YYYY').monthBusinessDays()

/*
[ { _isAMomentObject: true,
    _i: '01-01-2020',
    _f: 'DD-MM-YYYY',
    _isUTC: false,
    _pf:{ ... },
    _locale: { ... },
    _d: Thu Jan 01 2020 00:00:00 GMT-0600 (CST)
  } {
   ...
  },
  ( ... )
]
*/
```

**monthNaturalDays()**

C'est comme monthBusinessDays (), mais cette méthode inclura les week-ends sur sa réponse.

**monthBusinessWeeks()**

Récupérez un tableau de tableaux, ces tableaux sont la représentation d'une semaine ouvrée et chaque semaine (tableau) a ses propres jours ouvrés (du lundi au vendredi). Il se peut qu'une semaine (tableau) ait moins de 5 jours, c'est parce que le mois a commencé au milieu de la semaine, par exemple: la première semaine de janvier 2020 n'a que deux jours, jeudi 1er et vendredi 2.  **Chaque jour de la semaine, les tableaux sont des objets de moment.**

```javascript
// Busines semaines au cours du mois de janvier 2020 
moment('01-01-2020', 'DD-MM-YYYY').monthBusinessWeeks()

/*
[ [ { _isAMomentObject: true,
      _i: '01-01-2020',
      _f: 'DD-MM-YYYY',
      _isUTC: false,
      _pf: [...],
      _locale: [...],
      _d: Thu Jan 01 2020 00:00:00 GMT-0600 (CST) 
    }, { _isAMomentObject: true,
      _i: '01-01-2020',
      _f: 'DD-MM-YYYY',
      _isUTC: false,
      _pf: [...],
      _locale: [...],
      _d: Fri Jan 02 2020 00:00:00 GMT-0600 (CST) }
  ],
  [...]
]
*/
```

**monthNaturalWeeks()**

C'est comme monthBusinessWeeks (), mais cette méthode inclura les week-ends sur sa réponse.

Les objets renvoyés par les fonctions sont des objets momentjs ( sauf isBusinessDay ) afin que vous puissiez les gérer avec des fonctions natives moment.

**businessDiff()**

Calculez le nombre de jours ouvrables entre les dates.

```javascript
var diff = moment('01-01-2020', 'MM-DD-YYYY').businessDiff(moment('02-01-2020','MM-DD-YYYY'));
// diff = 20
```
