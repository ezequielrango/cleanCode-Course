export abstract class Vehicle {

    abstract getNumbersOfSeats(): number;
}

export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumbersOfSeats() {
        return this.numberOfSeats;
    }

}

export class Audi extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumbersOfSeats(): number {
        throw new Error("Method not implemented.");
    }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumbersOfSeats(): number {
        throw new Error("Method not implemented.");
    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }
    
    getNumbersOfSeats(): number {
        throw new Error("Method not implemented.");
    }


}


