module.exports = function(app) {
    const promises = require('../modal.js');

// get request to open home page 
    app.get('/',(req,res)=>{ 
        if (req.session.userId) {
            res.render('index',{session:"1"});  
        }
        else{
            res.render('index',{session:"0"});
        }
    });
// get request to open about page 
    app.get('/about',(req,res)=>{ 
        if (req.session.userId) {
            res.render('about',{session:"1"});  
        }
        else{
            res.render('about',{session:"0"});
        }
    });
// get request to open contact page 
    app.get('/contact',(req,res)=>{ 
        if (req.session.userId) {
            res.render('contact',{session:"1"});  
        }
        else{
            res.render('contact',{session:"0"});
        }
    });
// get request to open services page 
    app.get('/services',(req,res)=>{ 
        if (req.session.userId) {
            res.render('services',{session:"1"});  
        }
        else{
            res.render('services',{session:"0"});
        } 
    });
// get request to open project page 
    app.get('/project',(req,res)=>{ 
        if (req.session.userId) {
            res.render('projects',{session:"1"});  
        }
        else{
            res.render('projects',{session:"0"});
        }
    });
// post request for submit contact form and redirect to home 
    app.post('/contact',async(req,res)=>{ 
        var data = [
            firstName = req.body.firstName,
            lastName = req.body.lastName,
            email = req.body.email,
            message = req.body.message,
            number = req.body.number,
        ];
        var result = await promises.addContact(data);
        res.redirect('/');
    });
    app.post('/updatecontact',async(req,res)=>{ 
        var data = [
            firstName = req.body.firstName,
            lastName = req.body.lastName,
            email = req.body.email,
            number = req.body.number,
            id = req.body.id,
        ];
        var result = await promises.updateContact(data);
        res.redirect('/businesscontact');
    });
    // get request to open project page 
    app.get('/login',(req,res)=>{ 
        if (req.session.userId) {
            res.redirect('/');
        }
        else{
            res.render('login');
        }
    });
    
    app.get('/businesscontact',(req,res)=>{ 
        if (req.session.userId) {
            res.render('businesscontact');
        }
        else{
            res.redirect('/login');
        }
    });
    
    app.post('/login' ,async(req,res)=>{ 
        var email = req.body.email
        var password = req.body.password
        var result = await promises.userSignIn(email);
        if(result[0]!=null) {
            if(password == result[0].password){
                req.session.userId=result[0].id;
                res.redirect('/businesscontact');
            }
            else{
                res.render('login');
            }
            
        }
        else{
            res.render('login');
        }     
    });
    app.get('/getcontact',async(req,res)=>{
        if (req.session.userId) {
            var result = await promises.getcontact();
            res.send(result);
        }
    });
    
    app.get('/deletegetcontact',async(req,res)=>{
        if (req.session.userId) {
            var id = req.query.id;
            await promises.deletecontact(id);
            var result = await promises.getcontact();
            res.send(result);
        }
    });
    app.get('/getsinglecontact',async(req,res)=>{
        if (req.session.userId) {
            var id = req.query.id;
            var result = await promises.getsinglecontact(id);
            res.send(result);
        }
    });
    app.get('/logout', async (req, res) => {
        // await promises.updateSession(req.session.Id);
         req.session.destroy(function (err) {
             if (!err) {
                 res.redirect("/");
             } else {
                 throw err;
             }
         })
     })
 }