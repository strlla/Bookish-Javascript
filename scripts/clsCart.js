class Cart {
    list = [];
    size = 0;
    total = 0;
//
//
    constructor() {
        this.list = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).list : [];
        this.size = this.list.reduce((acc, i) => acc += i.qty, 0);
        this.total = this.list.reduce((acc, i) => acc + (i.qty * i.price), 0)
    }

    
    getCart(){
        return {list: this.list, size: this.size, total: this.total};
    }
    
    clearCart(){
        localStorage.removeItem('cart');
    }
    
    isInCart(itemId){
        return this.list(i => i.id === itemId);
    }

    addItem(item){
        if(isInCart()){
            this.list.forEach((i)=>{
                if(i.id == item.id){
                    i.qty += item.qty;
                }
            })
            JSON.stringify(localStorage.setItem('cart', {list: this.list, size: this.size, total: this.total}))
        }else{
            const newList = [...this.list, item];
            JSON.stringify(localStorage.setItem('cart', {list: newList, size: this.size, total: this.total}))
        }
        
    }
    
    removeItem(){
       //desarrollar más adelante
    }
    
}