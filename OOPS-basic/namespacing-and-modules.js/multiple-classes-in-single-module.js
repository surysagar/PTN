// multiple classes inside single modules 

var Westeros;    // Module

(function  (Westeros) {
    (function (Structures) {
        var Castel = (function() {
            function Castle(name) {
                this.name = name;
            }
            Castle.prototype.Build = function() {
                console.log('Castle build ' + this.name);
                var w = new Wall();
            }
            return Castle;
        }) ();
        structures.Castel = Castel;

        var Wall = (function() {
            function Wall() {
                
                console.log('wall constructed');
            }
            return Wall;
        })();
        structures.Wall = Wall;
    })(Westeros.Structures || (westeros.Structures = {}));
    var Structures = Westeros.Structures;
})(Westeros || (Westeros = {}));

// we can easilybspily module definition across files 