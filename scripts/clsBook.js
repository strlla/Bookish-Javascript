class Book {
    id = '';
    title = '';
    author = '';
    price = 0;

    constructor(id, title, author, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
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