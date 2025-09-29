const fs= require('fs');

   fs.open('test.txt','w',(err,fd) =>
    {
      if(err)
       {
         console.log(err)
       }
      else
       {
        console.log(fd);
       }

       fs.close(fd,(err) => {
        if (err)
        {
          console.log(err)
        }
       else
        {
          console.log('file is closed')
        }
      });
       
    })

    
    fs.stat('test.txt', (err,stat) =>
   {
    if(err)
     {
      console.log(err)
     }
    else
     {
      console.log(stat)
     }
    console.log('is file  ' + stat.isFile())
    console.log('is directory  ' + stat.isDirectory())
    })
    