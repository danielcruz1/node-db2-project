
exports.seed = function (knex) {
  // Deletes ALL existing entries, *and* resets the ID (because we are using
  // ".truncate()", not ".del()" - del() just removes the rows, but the
  // autoincrementing identifier field does not reset.)  
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 'aaaaaaaaaaaaaaaaa', make: 'Honda', model: 'Accord', transmission: 'automatic', mileage: 25123, title: true},
        { vin: 'bbbbbbbbbbbbbbbbb', make: 'Honda', model: 'Civic', transmission: 'manual', mileage: 12423, title: true},
        { vin: 'ccccccccccccccccc', make: 'Honda', model: 'HR-V', transmission: 'automatic', mileage: 22345, title: false},
        { vin: 'ddddddddddddddddd', make: 'Honda', model: 'CR-V', transmission: 'automatic', mileage: 56735, title: false},
        { vin: 'eeeeeeeeeeeeeeeee', make: 'Honda', model: 'S2000', transmission: 'manual', mileage: 43524, title: true},
      ]);
    });
};