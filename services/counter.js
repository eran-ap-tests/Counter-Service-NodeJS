function CounterSrv(){
    this.counter = 0;
    this.incCount = function(){
        this.counter++;
    }
    this.getCounter = function(){
        return this.counter;
    }
}
module.exports = global.counterSrv = new CounterSrv();

/*
A counter - got a increment function and a get function to retrieve
the counter's current value.
*/