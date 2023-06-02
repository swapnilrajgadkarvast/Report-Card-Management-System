import multer from 'multer';

export const uploadReport = () => {
   
    const upload=multer({
        storage:multer.diskStorage({
        destination:function(req,file,cb){
        console.log("Uploading");
        cb(null,'uploads/')
        },
        filename:function(req,file,cb){
        if(file.mimetype=="image/jpeg")
        cb(null,file.originalname+Date.now()+".jpg")
        else
        cb(null,file.originalname+Date.now())
        }
        })
        }).any('user_file');
        

    }
      
        app.post("/image", (req, res) =>{
        upload(req,res,(err)=>{
        if(err){
        res.status(400).send("Something went wrong!");
        } 
        res.send(req.files);
        })
        });

       