//blocking code 
console.log("order is placed");
console.log("order is on the way");

setTimeout(()=>{
    console.log("Order is rejected ! ");
},2000)

console.log("order is successfully delivered");

let orderStatus = (status)=>{
    console.log(`your order is ${status}`)
}

orderStatus("Cancelled...")