var express = require('express'),
//...
 request = require('request'),

app = express();

// Update this as needed
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});

//...

app.post('/googlePlaceAPI/search', function(req, res) {
    if(req.body.searchType) {
        request.post("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + req.body.query + "&types=" + req.body.searchType + "&key=yourKey", function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
                res.end(body);
            }
        });
    }
    else {
        request.post("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + req.body.query + "&key=yourKey", function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
                res.end(body);
            }
        });
    }
});

app.post('/googlePlaceAPI/place', function(req, res) {
    //console.log(req.body);
    request.post("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + req.body.placeID + "&key=yourKey", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.end(body);
        }
    });
});

//...

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
