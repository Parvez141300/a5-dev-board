const date = new Date();
const hour = date.getHours();
const time = date.toLocaleString('en-US', { 
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true });
const minute = date.toLocaleString('en-GB', { minute: 'numeric' });
const second = date.toLocaleString('en-GB', { second: 'numeric' });

const day = date.getDate();
const dayName = date.toLocaleString('en-GB', { weekday: 'short' });
const month = date.toLocaleString('en-GB', { month: 'long' });
const year = date.getFullYear();
console.log(time);

let h = hour;
if(hour > 12){
    let h = hour - 12;
    console.log(h);
}
else{
    console.log(h);
}