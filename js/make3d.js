$(document).ready(function() {

	var deviceIphone = "iphone";
	var deviceIpod = "ipod";
	var devicePalm = "palm";
	var deviceS60 = "series60";
	var deviceSymbian = "symbian";
	var engineWebKit = "webkit";
	var deviceAndroid = "android";
	var deviceWinMob = "windows ce";
	var deviceWinPhone = "windows phone";
	var deviceBB = "blackberry";

	//Initialize our user agent string to lower case.
	var uagent = navigator.userAgent.toLowerCase();

	//**************************
	// Detects if the current device is an iPhone.
	function DetectIphone()
	{
	   if (uagent.search(deviceIphone) > -1)
		  return true;
	   else
		  return false;
	}

	//**************************
	// Detects if the current device is an iPod Touch.
	function DetectIpod()
	{
	   if (uagent.search(deviceIpod) > -1)
		  return true;
	   else
		  return false;
	}

	//**************************
	// Detects if the current device is an iPhone or iPod Touch.
	function DetectIphoneOrIpod()
	{
		if (DetectIphone())
		   return true;
		else if (DetectIpod())
		   return true;
		else
		   return false;
	}	

	//**************************
	// Detects if the current browser is the S60 Open Source Browser.
	// Screen out older devices and the old WML browser.
	function DetectS60OssBrowser()
	{
	   if (uagent.search(engineWebKit) > -1)
	   {
		 if ((uagent.search(deviceS60) > -1 || 
			  uagent.search(deviceSymbian) > -1))
			return true;
		 else
			return false;
	   }
	   else
		  return false;
	}



	//**************************
	// Detects if the current device is an Android OS-based device.
	function DetectAndroid()
	{
	   if (uagent.search(deviceAndroid) > -1)
		  return true;
	   else
		  return false;
	}


	//**************************
	// Detects if the current device is an Android OS-based device and
	//   the browser is based on WebKit.
	function DetectAndroidWebKit()
	{
	   if (DetectAndroid())
	   {
		 if (DetectWebkit())
			return true;
		 else
			return false;
	   }
	   else
		  return false;
	}


	//**************************
	// Detects if the current browser is a Windows Mobile device.
	function DetectWindowsMobile()
	{
	   if (uagent.search(deviceWinMob) > -1)
		  return true;
	   else
		  return false;
	}

	//**************************
	// Detects if the current browser is a Windows Phone OS 7+ Mobile device.
	function DetectWindowsPhone()
	{
	   if (uagent.search(deviceWinPhone) > -1)
		  return true;
	   else
		  return false;
	}

	//**************************
	// Detects if the current browser is a BlackBerry of some sort.
	function DetectBlackBerry()
	{
	   if (uagent.search(deviceBB) > -1)
		  return true;
	   else
		  return false;
	}

	//**************************
	// Detects if the current browser is on a PalmOS device.
	function DetectPalmOS()
	{
	   if (uagent.search(devicePalm) > -1)
		  return true;
	   else
		  return false;
	}

	function DetectMobileOS()
	{
		if (DetectIphoneOrIpod() || DetectS60OssBrowser() || DetectAndroid() || DetectAndroidWebKit() || DetectWindowsMobile() || DetectBlackBerry() || DetectPalmOS())
		{
			return true
		} else {
			return false
		}

	}


	if (DetectMobileOS())
	{
		//redirect to non 3D page
		window.location="indexn3d.html";
	}
	
	else{
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

			var container;

			var camera, scene, renderer;
			var cameraCube, sceneCube;

			var mesh, lightMesh, geometry;
			var spheres = [];

			var directionalLight, pointLight;

			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			document.addEventListener( 'mousemove', onDocumentMouseMove, false );

			init();
			animate();

			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				scene = new THREE.Scene();
				sceneCube = new THREE.Scene();

				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
				camera.position.z = 3200;
				scene.add( camera );

				cameraCube = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
				sceneCube.add( cameraCube );

				var geometry = new THREE.SphereGeometry( 200, 32, 16 );

				var path = "textures/cube/collage/";
				var format = '.jpg';
				var urls = [
					path + 'px' + format, path + 'nx' + format,
					path + 'py' + format, path + 'ny' + format,
					path + 'pz' + format, path + 'nz' + format
				];
				
				var pathSub = "textures/cube/whitebg/";
				var urlsWh = [
					pathSub + 'px' + format, pathSub + 'nx' + format,
					pathSub + 'py' + format, pathSub + 'ny' + format,
					pathSub + 'pz' + format, pathSub + 'nz' + format
				];

				var textureCube = THREE.ImageUtils.loadTextureCube( urls, new THREE.CubeRefractionMapping() );
				var textureCubeWhite = THREE.ImageUtils.loadTextureCube( urlsWh, new THREE.CubeRefractionMapping() );
				var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube, refractionRatio: 1.0 } );

 				for ( var i = 0; i < 80; i ++ ) {

					var mesh = new THREE.Mesh( geometry, material );

					mesh.position.x = Math.random() * 10000 - 5000;
					mesh.position.y = Math.random() * 10000 - 5000;
					mesh.position.z = Math.random() * 10000 - 5000;

					mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;

					scene.add( mesh );

					spheres.push( mesh );

 				}

				// Skybox

				var shader = THREE.ShaderUtils.lib[ "cube" ];
				shader.uniforms[ "tCube" ].texture = textureCubeWhite;
				var material = new THREE.ShaderMaterial( {
					fragmentShader: shader.fragmentShader,
					vertexShader: shader.vertexShader,
					uniforms: shader.uniforms,
					depthWrite: false
				} ),

				mesh = new THREE.Mesh( new THREE.CubeGeometry( 100, 100, 100 ), material );
				mesh.flipSided = true;
				sceneCube.add( mesh );

				//

				renderer = new THREE.WebGLRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.autoClear = false;
				container.appendChild( renderer.domElement );

			}

			function onDocumentMouseMove(event) {

				mouseX = ( event.clientX - windowHalfX ) * 10;
				mouseY = ( event.clientY - windowHalfY ) * 10;

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				var timer = 0.0001 * Date.now();

				for ( var i = 0, il = spheres.length; i < il; i ++ ) {

					var sphere = spheres[ i ];

					sphere.position.x = 5000 * Math.cos( timer + i );
					sphere.position.y = 5000 * Math.sin( timer + i * 1.1 );

				}

				camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - mouseY - camera.position.y ) * .05;

				camera.lookAt( scene.position );
				cameraCube.rotation.copy( camera.rotation );

				renderer.render( sceneCube, cameraCube );
				renderer.render( scene, camera );

			}
		}
		});	
