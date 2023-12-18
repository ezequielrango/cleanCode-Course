
interface Bird {
    eat(): void;
}

interface FliyingBird {
    fly(): void;
}

interface SwimmingBird {
    swim(): void;
}

interface RunningBird {
    run(): void;
}

class Tucan implements Bird, FliyingBird {

    public run() {}
    public fly() {}
    public eat() {}
}

class Huminbird implements Bird, FliyingBird {

    public run() {}
    public fly() {}
    public eat() {}
}

class Ostrich implements Bird, RunningBird {
    public run() {}
    public eat() {}
}

class Penguin implements Bird, SwimmingBird {
    public eat() {}
    public swim() {}
}