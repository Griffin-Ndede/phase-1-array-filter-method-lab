// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, searchString){
    return drivers.filter(function(drivers){
    return drivers.toLowerCase() === searchString.toLowerCase();
    })
}   

const drivers1 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function fuzzyMatch(drivers, query){
    return drivers.filter(function(driver){
        return driver.toLowerCase().startsWith(query.toLowerCase())
    })
}
function matchName(drivers, searchString) {
    return drivers.filter(function(driver) {
      return driver.name.toLowerCase() === searchString.toLowerCase();
    });
  }