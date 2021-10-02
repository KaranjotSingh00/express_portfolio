module.exports = function(app) {

    
    app.get('/',(req,res)=>{ 
        
        res.render('index.ejs');  
    });
    app.get('/test',(req,res)=>{ 
        
        res.render('test.ejs');  
    });

 }