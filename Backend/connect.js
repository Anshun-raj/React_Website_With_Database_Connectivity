var express=require("express");
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const mysql=require("mysql");
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))






app.post('/api/insert',function(req,res){
       console.log(req.body);
       var name=req.body.name;
       var email=req.body.email;
       var text=req.body.text;
       var age=req.body.age;
       var rate=req.body.rate;
       db.connect(function(err){
         if(err) throw err;
              
         var sql="INSERT INTO feedbackdata(name,email,age,text,rate) VALUES('"+name+"','"+email+"','"+text+"','"+age+"','"+rate+"')";
         var data="SELECT * from feedbackdata";
         db.query(sql,function(err,res1){
            if(err) throw err;
             
        })
        db.query(data,function(err,res2){
            if(err) throw err;
            console.log(res2);
        })

    })
});
app.listen(3001);
