var path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js')),
    promise = require('promise'),
    	readFile = promise.denodeify(require('fs').readFile);
   
require('es6-promise').polyfill();
require('isomorphic-fetch');


var T = new Twit(config);

var mess;
var url = 'http://corpora-api.herokuapp.com/governments/nsa_projects';

	fetch(url)
	.then(res => res.json())
	.then((out) => {
		 mess = out.data.codenames;
		 randNames(mess);
		})
	.catch(err => console.error(err));


function randNames(names)
{	
	var tweet = "";
	var next = "";
	do
	{
		var rng = Math.floor(Math.random() * (names.length));
		tweet +=  next;
		var next = names[rng] + '\n';

	}
	while ((tweet.length + next.length) <140)
	console.log(tweet);
	
	T.post('statuses/update', { status: tweet }, function(err, data, response) {
  		console.log(data)
});
}
/*
	$.getJSON
		, function(data) {
    		T.post('statuses/update', { status: 'Test1' }
    			,function(err, data, response){console.log(data)}
 	 			);

						}
			);
}*/


// fs.readdir(__dirname + '/images', function(err, files) 
// {
//   if (err){
//     console.log(err);
//   }
//   else{
//     var images = [];
//     files.forEach(function(f) {
//       images.push(f);
//     });

//     setInterval(function(){
//       upload_random_image(images);
//     }, 10000);
//   }
// });



// function random_from_array(images){
//   return images[Math.floor(Math.random() * images.length)];
// }
// function upload_random_image(images){
//   console.log('Opening an image...');
//   var image_path = path.join(__dirname, '/images/' + random_from_array(images)),
//       b64content = fs.readFileSync(image_path, { encoding: 'base64' });

//   console.log('Uploading an image...');

//   T.post('media/upload', { media_data: b64content }, function (err, data, response) {
//     if (err){
//       console.log('ERROR:');
//       console.log(err);
//     }
//     else{
//       console.log('Image uploaded!');
//       console.log('Now tweeting it...');

//       T.post('statuses/update', {
//         media_ids: new Array(data.media_id_string)
//       },
//         function(err, data, response) {
//           if (err){
//             console.log('ERROR:');
//             console.log(err);
//           }
//           else{
//             console.log('Posted an image!');
//           }
//         }
//       );
  		/*    fs.unlink(image_path, function(err){
		  if (err){
		    console.log('ERROR: unable to delete image ' + image_path);
		  }
		  else{
		    console.log('image ' + image_path + ' was deleted');
		  }
		});*/
  //   }
  // });
// }