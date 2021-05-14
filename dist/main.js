var Shapes;
(function (Shapes) {
    Shapes[Shapes["Circle"] = 0] = "Circle";
    Shapes[Shapes["Square"] = 1] = "Square";
    Shapes[Shapes["Triangle"] = 2] = "Triangle";
})(Shapes || (Shapes = {}));
function numCorners(shape) {
    switch (shape) {
        case Shapes.Circle:
            return 0;
        case Shapes.Square:
            return 4;
        case Shapes.Triangle:
            return 3;
        default:
            impossibleShape(shape);
    }
}
function impossibleShape(shape) {
    throw new Error("Inhandled " + shape);
}
