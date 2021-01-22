class Redbox extends Box{
    constructor(x,y){
        super(x,y,30,40);
    }
    display(){
        fill(213,239,231);
        super.display();
    }
}