
var env = require('node-env-file');
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var jwtAuth = require('express-jwt');
var Person = require('./models/person');
var User = require('./server/models/user');

const app = express();

//env(__dirname + '/.env');

app.set('port', (process.env.PORT || 5000));

app.set('jwtSecret', process.env.JWT_SECRET);

app.use(bodyParser.urlencoded({ extended: true} ));
app.use(bodyParser.json());

var uristring = process.env.MONGOLAB_URI;

 mongoose.connect(uristring, function (err, res) {
    if (err) {
      console.log ('ERROR connecting : ' + uristring + '. ' + err);
    } else {
      console.log ('Succeeded connected to: ');
      }
    });


// views is directory for all template files

app.set('views', __dirname + '/views');
app.use('/root', express.static(__dirname + '/'));
app.use('/jspm_packages', express.static(__dirname + '/jspm_packages'));
app.use('/shared', express.static(__dirname + '/shared/'));
app.use('/client', express.static(__dirname + '/client/'));
app.set('view engine', 'ejs');

app.get('/', function(request,response) {
  response.render('pages/index', { content: 'This will be server react' });
});





var apiRouter = express.Router();

apiRouter.use(function(request, response, next) {
    console.log('api router doing something');
    

    next();
});

apiRouter.get('/', function(request, response) {
  

});

app.get('/protected',
    jwtAuth({secret: process.env.JWT_SECRET}),
    function(request, response) {
      console.log(request.user);
      if(!request.user.admin) return response.send(401);
      response.json({message: 'authenticatd user'});
    });

app.get('/setup', function(request, response) {

  var testUser = new User({
    email: 'test@test2.com',
    password: 'password',
    admin: true
  });

  User.findOne({email: 'test@test2.com'}, function(err, user) {
    if (err) throw err;

    user.comparePassword('password1', function(err, isMatch) {
      if (err) throw err;
      response.json({message: isMatch});
    });

  })

  /*
  testUser.save(function(err) {
    if (err) throw err;

    console.log('user created');
    response.json({ success: true});
  });
  */

});

apiRouter.route('/people')

  .post(function(request, response) {

    var person = new Person();
    person.name = request.body.name;
    person.age = request.body.age;

    person.save(function(err) {
        if (err)
              response.send(err);

         response.json({message: 'Person created'});   
    });
   })

   .get(function(request, response) {
      Person.find(function(err, data) {
        if (err)
              response.send(err);

         response.json(data);   
        
      });
   }); 
  

apiRouter.get('/admin/users', function(request, response) {
  User.find({}, function(err, users) {
    response.json(users);
  })
});

apiRouter.post('/authenticate', function(request, response) {
  
  User.findOne({
    email: request.body.email
    }, function(err, user) {

      if (err) throw err;

      if(!user) {
        response.json({success: false, message: 'Authentication failed.'});
      } else if (user) {
        
        if(user.password != request.body.password) {
          response.json({ success: false, message: 'Authentication failed.'});
        } else {

          var token = jwt.sign(user, app.get('jwtSecret'), {
            expiresInMinutes: 30
          });

          response.json({
            success: true,
            message: 'Have a token',
            token: token
          });
        
        }
    }

  });
});

app.use('/api', apiRouter);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});