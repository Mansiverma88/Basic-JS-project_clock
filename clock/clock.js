setInterval(()=>// repeats stuff forever
    {
        d = new Date();//gets present data
        htime = d.getHours();//gets present date current hour
        mtime = d.getMinutes();//gets present date current min
        stime = d.getSeconds();//gets present date current seconds
        hrotation = 30*htime + mtime/2;
        mrotation = 6*mtime;
        srotation = 6*stime;
    
        hour.style.transform = `rotate(${hrotation}deg)`;//teeling hours to changes it style like rotate
        minutes.style.transform = `rotate(${mrotation}deg)`;//teelling minutes to tranform style by this degree
        seconds.style.transform = `rotate(${srotation}deg)`;
    }, 1000);