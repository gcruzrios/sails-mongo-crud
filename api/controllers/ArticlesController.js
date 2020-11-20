/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const Articles = require("../models/Articles");

module.exports = {
  
    list: async (request, response) => {
        let articles = await Articles.find({});
        response.view("list", {articles});
    },

  
    /*list:function(req, res){
        //res.view('list');
        Articles.find({}).exec(function(err, articles){
            if(err){
                res.send(500, {error:'Database Error'});
            }
            res.view('list',{articles:articles});
        });
    }*/

    add: function(request, response){
        response.view('add');

    },




    
    create: async (request, response) => {
        const title = request.body.title;
        const body = request.body.body;

        try{
            let artice = await Articles.create({title:title, body:body})
            
            response.redirect('/articles/list');
            
        }  
        catch(error){
            console.log(article);
            //send(500, {error:'Database error'});
            //response.status(status).send(body)
        }
      
             
    
    },

    
    delete: async (request, response) => {

        try{
            let artice = await Articles.destroyOne({id:request.params.id})
            
            response.redirect('/articles/list');
      
        }  
        catch(error){
            console.log(article);
        }
      
      
    },

    edit: async (request,response) => {

        let article = await Articles.findOne({id:request.params.id});
        response.view("edit", {article});
        
        
    },

    update: async(request, response) => {


        const title = request.body.title;
        const body = request.body.body;
        
        try{
            let article = await Articles.update({id:request.params.id},{title:title, body:body})
            response.redirect('/articles/list');
        }
        catch(error){
            console.log(article);
        }

    }

    
    /*
    delete: function(request, response){
        Articles.destroy({id:request.params.id}).exec(function(err){

            response.redirect('/articles/list');
        });
    }
  */   
};

