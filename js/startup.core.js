var onStartupEvents = [];
window.addEventListener('DOMContentLoaded', processStartupEvents);

function forEach(array,callback)
{
    for(var i=0; i < array.length;i++)
    {
        callback(array[i]);
    }
}

function processStartupEvents() {
    forEach(onStartupEvents,function(element){
        element();
    });
}

function onLoad(event)
{
    onStartupEvents.push(event);
}