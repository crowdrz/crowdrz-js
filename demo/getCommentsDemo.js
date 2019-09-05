import Crowdrz from '../lib/crowdrz';

const getCommentsDemo = function() {
  let crowdrz = new Crowdrz();
  crowdrz.addScope('facebook', 'EAAGnFkxIcgQBAC1q7lmdM36JMx5qQg3ZAYPj5Hdai4pLkgm6MjZARrVRkM1nJRgsLexv3KoKIHoWqXmeqM2QTwQ9ZAYcWppXLDKeBBbwniFxebJpigl3gH7Nr1GtOSUixFCnE2SJUIkkogL56NmreMxKmpUVsGHI1qDjfnGTVqhRWQg6Vwyn4uDsi0C2rxcXPDeWsJ0nQZDZD')
  crowdrz.facebook.getComments();
}

getCommentsDemo();