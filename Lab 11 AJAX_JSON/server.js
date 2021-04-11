var express = require('express');
var app = express();
const PORT =8081;

app.get('/getBusInfo', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let dataToSend = [ 
        {  "img"    :"img/map-ca.png"
            ,"state"  :"California"
            ,"city"   :"San Francisco, CA"
            ,"date"   :"May 1"
        },
        {  "img"   :"img/map-tx.png"
            ,"state" :"Texas"
            ,"city"  :"Austin, TX"
            ,"date"  :"May 15"
        },
        {  "img"   :"img/map-ny.png"
            ,"state" :"New York"
            ,"city"  :"New York, NY"
            ,"date"  :"May 30"
        }
    ];
  
    res.send( dataToSend );
    return;
});

var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
 console.log(`Server running at http://127.0.0.1:${PORT}/`);