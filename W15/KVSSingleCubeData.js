KVS.SingleCubeData = function()
{
    var volume = new KVS.StructuredVolumeObject();
    volume.resolution.set(2, 2, 2);
    volume.values = [[0], [0], [0], [0], [0], [0], [0], [0]];
    volume.setMinMaxCoords(new KVS.Vec3(0, 0, 0), new KVS.Vec3(128, 128, 64));
    volume.setMinMaxValues(0, 255);
    return volume;
}
