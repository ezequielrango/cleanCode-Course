
interface Bird {
    fly(): void;
    eat(): void;
    run(): void
}

class Tucan implements Bird {

    public run() {}
    public fly() {}
    public eat() {}
}

class Huminbird implements Bird {

    public run() {}
    public fly() {}
    public eat() {}
}

class Ostrich implements Bird {
    public run() {}
    public fly() {}
    public eat() {}
}