(() => {

    // función para obtener información de una película por Id
    function getAllMovies(movieId: string) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActors(id: string) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getUsuario(ActorId: string) {
        console.log({ ActorId });
    }

    // Crear una película
    function movie(title: string, description: string, rating: number, cast: string[]) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActorIfActorNotExists(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }



    // función para obtener información de una película por Id
    function getMovieById(movieId: number) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getActorsByMovieId(movieId: number) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorById(id: number) {
        console.log({ id });
    }

    interface MovieProps {
        cast: string[]
        description: string,
        rating: number,
        title: string,
    }

    // Crear una película
    function createMovie({ title, description, rating, cast }: MovieProps) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function newActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }

    //MAL   
    const getPayAmount1 = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }


    //MEJOR
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if (isDead) return 1500;
        if (isSeparated) return 2500;
        return (    isRetired ) ? 3000 : 4000;
    }

})();