function main()
{
    var volume = new KVS.SingleCubeData();
    var screen = new KVS.THREEScreen();

    screen.init(volume, {
      width: window.innerWidth * 0.8,
      height: window.innerHeight,
      targetDom: document.getElementById('display'),
      enableAutoResize: false
    });
    setup();
    screen.loop();

    function setup()
    {
      var bounds = Bounds( volume );
      screen.scene.add( bounds );

      var color = new KVS.Vec3( 0, 0, 0 );
      var box = new KVS.BoundingBox();
      box.setColor( color );
      box.setWidth( 2 );

      var smin = volume.min_value;
      var smax = volume.max_value;
      var isovalue = KVS.Mix( smin, smax, 0.5 );
      var colorvalue = KVS.Mix( smin, smax, 0.5 );
      var isosurface = Isosurfaces( volume, isovalue, Math.round(colorvalue) );

      document.getElementById('label').innerHTML = "Isovalue: " + Math.round( isovalue );
      document.getElementById('clabel').innerHTML = "Color: " + Math.round( colorvalue );
      document.getElementById('isovalue')
          .addEventListener('mousemove', function() {
              var value = +document.getElementById('isovalue').value;
              var isovalue = KVS.Mix( smin, smax, value );
              document.getElementById('label').innerHTML = "Isovalue: " + Math.round( isovalue );
          });

      document.getElementById('colorvalue').addEventListener('mousemove', function() {
              var value = document.getElementById('colorvalue').value;
              var colorvalue = KVS.Mix( smin, smax, value );
              document.getElementById('clabel').innerHTML = "Color: " + Math.round( colorvalue );
          });

      var selD = document.getElementById('selData');
      selD.onchange = function(){
        var indx = document.formData.selData.selectedIndex;
        var val = document.formData.selData.options[indx].value;
        if(val == "hyd"){
          volume = new KVS.HydrogenData( 128, 128, 128 );
        }
        else if(val == "lob"){
          volume = new KVS.LobsterData();
        }
        else{
          volume = new KVS.SingleCubeData();
        }
      }

      document.getElementById('change-isovalue-button')
          .addEventListener('click', function() {
              screen.scene.remove( isosurface );
              screen.scene.remove( bounds );
              var ivalue = +document.getElementById('isovalue').value;
              var isovalue = KVS.Mix( smin, smax, ivalue );
              var cvalue = document.getElementById('colorvalue').value;
              var colorvalue = KVS.Mix( smin, smax, cvalue );
              isosurface = Isosurfaces( volume, isovalue, Math.round(colorvalue) );
              bounds = Bounds( volume );
              screen.scene.add( bounds );
              screen.scene.add( isosurface );
          });

      document.addEventListener( 'mousemove', function() {
          screen.light.position.copy( screen.camera.position );
      });

      window.addEventListener('resize', function() {
          screen.resize([
              window.innerWidth * 0.8,
              window.innerHeight
          ]);
      });

      screen.draw();
    }


}
