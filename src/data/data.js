let retreiveData = JSON.parse(localStorage.getItem('newData'))

let Data = [
    {
        email:"mehrozali998",
        password:"123456"
    },
    {
        email:"mehrozali689",
        password:"273932"
    },
    {
        email:"Mehrozali565",
        password:"456789"
    },
    {

        email:"mehrozali685",
        password:"123455"
    },
    {
        email:"mehrozali689",
        password:"12345566"
    }
]
// let newArray = data.push(retreiveData);
Data = retreiveData; 
export default Data