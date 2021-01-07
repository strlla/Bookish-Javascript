class Libro {
    id = '';
    title = '';
    author = '';
    price = 0;
    isNew = true;

    constructor(id, title, author, price, isNew) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.new = isNew;
    }

    getPrice() {
        return this.price;
    }
    
    getPriceWithShipping(){
        return this.price + 200; 
    }

    calculateInstallments(ins) {
      const price = this.getPriceWithShipping();
      return price / ins;
    }
}