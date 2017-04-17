Vec3 = function(x, y, z){
    
    this.x = x;
    this.y = y;
    this.z = z;

}

Vec3.prototype.add = function(v){

    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;

}

Vec3.prototype.sum = function(){

    return this.x + this.y + this.z;

}

Vec3.prototype.min = function(){

    var a = this.x;

    if(this.y < a)
	a = this.y;

    if(this.z < a)
	a = this.z;

    return a;

}

Vec3.prototype.max = function(){

    var a = this.x;

    if(this.y > a)
	a = this.y;

    if(this.z > a)
	a = this.z;

    return a;

}

Vec3.prototype.mid = function(){

    var a = this.x;
    
    if(this.y != this.max() && this.y != this.min())
	a = this.y;

    if(this.z != this.max() && this.y != this.min())
	a = this.z;

    return a;

}

