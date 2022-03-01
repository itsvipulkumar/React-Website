import React,{useState} from 'react'

const StatusBar = () => {
    const Mydate=new Date().toLocaleDateString();
    const month= Date()
    const [Time, Settime]=useState(new Date().toLocaleTimeString())
    const RefTime=()=>
    {
       Settime(new Date().toLocaleTimeString());
    }
  
    setInterval(RefTime,1000);
// const Mytime= new Date().toLocaleTimeString();
    return (
        <>
            <div className="statusbar">
                <div className='status'>
                <div>{Mydate}</div>
                <div>{Time}</div>
                
                </div>
            </div>
        </>
    )
}

export default StatusBar
