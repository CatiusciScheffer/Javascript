const getAdmins = (map) =>{
    let admins = [];
    
    for ([key, value] of map) {
		if (value === 'admin') {
			admins.push(key);
		}
	}
    return admins;
};

const myMap = new Map();

myMap.set('Lucas', 'usuario');
myMap.set('Rafael', 'usuario');
myMap.set('Maria', 'admin');
myMap.set('Jurema', 'usuario');
myMap.set('Juju', 'usuario');
myMap.set('Leandro', 'admin');

console.log(getAdmins(myMap));