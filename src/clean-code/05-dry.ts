// NO APLICANDO DRY

type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) { }

    toString() {
        if (this.name.length <= 0) throw Error("name is empty");
        if (this.price <= 0) throw Error('Price is zero');
        if (this.size.length <= 0) throw Error('size is empty');

        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Blue pantsss', 3, 'M');

    console.log('bluePants', bluePants.toString());
})();


// APLICANDO DRY, si tenemos muchas propiedades el codigo no va a escalar innecesariamente

type Size2 = '' | 'S' | 'M' | 'XL';

class Product2 {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size2 = '',
    ) { }

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) == 0) throw Error(`${key} is empty`);
                    break;
                    default: 
                    throw Error('not supported')
            }
        }
        return true;
    }


    toString() {
        if ( !this.isProductReady ) return;
        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants2 = new Product2('Blue pantsss', 10, 'S');

    console.log('bluePants2', bluePants2.toString());
})();
