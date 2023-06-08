const myConsole = r => console.log(r);


const t = (x, y ,fn) => {
    fn(x * y)
    fn(x + y)
    fn(x - y)
}

t(10, 9, myConsole);
t(5 , 4, res => console.log(res * 100))