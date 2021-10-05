module.exports = function(app) {

    
    app.get('/',(req,res)=>{ 
        
        res.render('index.ejs');  
    });
    app.get('/about',(req,res)=>{ 
  
        res.render('about.ejs');  
    });
    app.get('/contact',(req,res)=>{ 
        
        res.render('contact.ejs');  
    });
    app.get('/services',(req,res)=>{ 
        
        res.render('services.ejs');  
    });
    app.get('/project',(req,res)=>{ 
        
        res.render('projects.ejs');  
    });
 }