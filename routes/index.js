module.exports = function(app) {

// get request to open home page 
    app.get('/',(req,res)=>{ 
        res.render('index.ejs');  
    });
// get request to open about page 
    app.get('/about',(req,res)=>{ 
        res.render('about.ejs');  
    });
// get request to open contact page 
    app.get('/contact',(req,res)=>{ 
        res.render('contact.ejs');  
    });
// get request to open services page 
    app.get('/services',(req,res)=>{ 
        res.render('services.ejs');  
    });
// get request to open project page 
    app.get('/project',(req,res)=>{ 
        res.render('projects.ejs');  
    });
 }