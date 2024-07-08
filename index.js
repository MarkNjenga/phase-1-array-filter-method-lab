// Code your solution here
function findMatching(drivers, query) {
    const lowercaseQuery = query.toLowerCase();
    const matchingDrivers = drivers.filter(driver => {

        const lowercaseDriver = driver.toLowerCase();
        return lowercaseDriver.includes(lowercaseQuery);
    });

    return matchingDrivers;
}
function fuzzyMatch(drivers, query){
    const lowercaseQuery = query.toLowerCase();
    const matchingDrivers = drivers.filter(driver => {
        const lowercaseDriver = driver.toLowerCase();
        return lowercaseDriver.startsWith(lowercaseQuery);
    }); 

    return matchingDrivers;
}
function matchName(drivers, query) {
    const matchingDrivers = drivers.filter(driver => {
        return driver.name.toLowerCase() === query.toLowerCase();
    });

    return matchingDrivers;
}