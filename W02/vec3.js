Vec3=function(x,y,z)
{
	console.log(x);
    this.x = x.value;
    this.y = y.value;
    this.z = z.value;
}

// Add method

Vec3.prototype.add = function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

// Sum method
Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}


//min
Vec3.prototype.min = function()
{
    var min= this.x;
    if(min>this.y) min=this.y;
    if(min>this.z) min=this.z; 
    return min;
}


//mid
Vec3.prototype.mid = function()
{
    var mid;
    var max= this.x;
    if(max < this.y) max=this.y;
    if(max < this.z) max=this.z;
    
    var min= this.x;
    if(min>this.y) min=this.y;
    if(min>this.z) min=this.z; 

    if(max>this.x&&min<this.x) mid=this.x;
    if(max>this.y&&min<this.y) mid=this.y;
    if(max>this.z&&min<this.z) mid=this.z;
    

    
    //var mid=(this.x + this.y + this.z)/3 
    return mid;
}

//max
Vec3.prototype.max = function()
{
     var max= this.x;
    if(max < this.y) max=this.y;
    if(max < this.z) max=this.z; 
    return max;
}

function AreaOfTriangle(v0,v1,v2){
    
    var a=Math.pow(v1.x-v0.x,2)+Math.pow(v1.y-v0.y,2)+Math.pow(v1.z-v0.z,2);
    var b=Math.pow(v2.x-v0.x,2)+Math.pow(v2.y-v0.y,2)+Math.pow(v2.z-v0.z,2);
    var c=(v1.x-v0.x)*(v2.x-v0.x)+(v1.y-v0.y)*(v2.y-v0.y)+(v1.z-v0.z)*(v2.z-v0.z);
    var s=Math.sqrt(a*b-c*c)/2;
    return s;

}

