const Crowdrz = require('../index')

let crowdrz = new Crowdrz('facebook', 'EAAOdARHxc0YBAB1tBLkE55o01tf3oBRQnukOW84ahzmZAPPH8nhs6rEqXU6IUO0qzDQ9OnKDnJCYkS4Mm0QdNQXlqOm5U9UiVX1hK5yhK4GFZAQ1JE1XT0zA2JVOzMpJxJUxeJEKuy8SU0gNM5wWTyiYETxwONQ4luyw0SCpM9OLsSXZApgZA1MF5FHwaHUZD');
let comments = crowdrz.applyProcess('getComments', '2394127887331679');
console.log('comments', comments);
