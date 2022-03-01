import React from 'react';

function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function div(a,b)
{
    let div=a/b;
    div=div.toFixed(2);
    return div;
}

function mul(a,b)
{
    return a*b;
}
export default add;
export {sub,mul,div};