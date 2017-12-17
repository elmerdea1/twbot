require("jsdom").env("", function(err, window) 
{
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);
});

var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);

var mess;
function read-stuff()
{
	URL url = new URL("http://corpora-api.herokuapp.com/governments/nsa_projects");

}

T.post('statuses/update', { status: 'Test1' }, function(err, data, response) {
 	 console.log(data)
	});

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
    }
  });
}