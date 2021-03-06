/**
 * SectionsController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
	
  
	findSections: function (req,res) {
		var ids = req.param('ids');

		if(ids){
			Sections.find().done(function(err, sections) {

				var results = [],
					item;

				// Check results to see if they match
				for(var i = 0; i < sections.length; i++){
					item = sections[i];

					for(var j = 0; j < ids.length; j++){

						if(item.id === ids[j]){
							results.push(item);
						}
					}
				}

				res.json(results);
			});
		} else {

			Sections.find().done(function(err, sections) {

				res.json(sections);
			});
		}
	},

	/**
	* Overrides for the settings in `config/controllers.js`
	* (specific to SectionsController)
	*/
	_config: {}

  
};
