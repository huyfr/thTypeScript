import './scss/styles.scss';

interface IUser {
    name: string;
    age: number;
}

let customer: IUser = {
    name: "Huy",
    age: 24
};

console.log(customer);

//===============================

class Shape {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `(x: ${this.x}, y: ${this.y})`;
    }
}

interface IArea {
    area(): number;
}

class Rect extends Shape implements IArea {
    public width: number;
    public height: number;

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y);
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

const rect = new Rect(5,5,10,20);
console.log(rect.toString());
console.log(rect.area());