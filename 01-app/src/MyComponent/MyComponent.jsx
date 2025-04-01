
const user ={
    firstName : 'Swapnil',
    lastName : 'Bhong'
}

const  MyComponent=() =>
    {
        const link ="www.google.com"
    
        return(
        <>
        <h1> hello , {user.firstName+' '+user.lastName}
        
        </h1>
        <a href={link}>click me </a>
        
        </>
        )
    } 

    export default MyComponent