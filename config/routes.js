/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  //'GET /articles/list': { view: 'pages/list' },
  'GET /articles/list' : 'ArticlesController.list',
  'POST /articles/add' : 'ArticlesController.add',
  'POST /articles/create' : 'ArticlesController.create',
  'POST /articles/delete/:id' : 'ArticlesController.delete',
  'GET /articles/edit/:id' : 'ArticlesController.edit',
  'POST /articles/update/:id' : 'ArticlesController.update',

  /*
  'POST /customer/delete/:id': {
    controller: 'CustomerController',
    action: 'deletecustomer'
    },
  */
  /*'/articles/list': {
    controller: 'ArticlesController',
    action: 'list' // "list" was the name of the function in the video, yours could differ
    },
  */




  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
