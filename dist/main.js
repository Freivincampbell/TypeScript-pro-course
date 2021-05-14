var Shapes;
(function (Shapes) {
    Shapes[Shapes["Circle"] = 0] = "Circle";
    Shapes[Shapes["Square"] = 1] = "Square";
    Shapes[Shapes["Triangle"] = 2] = "Triangle";
})(Shapes || (Shapes = {}));
var circle = Shapes.Circle;
console.log(Shapes);
var CDS;
(function (CDS) {
    CDS[CDS["OnPush"] = 0] = "OnPush";
    CDS[CDS["Default"] = 1] = "Default";
})(CDS || (CDS = {}));
function isDefaultCDS(cds) {
    return cds === null || cds === CDS.Default;
}
console.log(isDefaultCDS(CDS.Default));
