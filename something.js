// users are here -> https://jsonplaceholder.typicode.com/todos
const titleName = ['titulo1', 'titulo2', 'titulo3', 'titulo4', 'titulo5', 'titulo6', 'titulo7', 'titulo8', 'titulo9', 'titulo10']
const parseUsers = users.reduce((UserAccumulator, currentUser) => {
	if(!currentUser.completed) {
		return UserAccumulator;
	}

	const user = {
		id: currentUser.id,
		title: currentUser.title,
		state: currentUser.completed
  }

  const userId = currentUser.userId
  // obtener key dependiendo del id , si no existe se crea el objeto
	const kindUser = UserAccumulator[userId]  || {
		title: titleName[userId - 1], // obtener el titulo de la posicion del array
		infoUser : []
	};

	return {
		...UserAccumulator,
		[userId]: {
			...kindUser,
			infoUser: [...kindUser.infoUser, user]
		}
	}
},{});
console.log("Parse Object", parseUsers);

const UsersArray = Object.keys(parseUsers).map(element => parseUsers[element]);
console.log("Array of users", UsersArray);

/*
  Cosas a recordar:
    valor Inicial : el reduce debe tener un valor inicial , en el caso del ejemplo es un arreglo ese valor se ve escrito aca , user.reduce((UserAccumulator, currentUser) => {}, {}); el objeto del final es el valor inicial
    No mutar la data : Por eso se hacen los spread en los return , es mejor para no generar efectos secundarios
    ingresar a un valor del objeto : Recordar que podemos ingresar a los valores de los objetos especificando la key donde queremos estar, const kindUser = UserAccumulator[userId]
*/
