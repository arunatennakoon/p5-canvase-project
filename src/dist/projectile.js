new p5(function (p) {
    p.setup = function () {
        p.createCanvas(400, 400);
    };
    p.draw = function () {
        p.background(200);
        p.fill(100);
        p.ellipse(p.width / 2, p.height / 2, 50, 50);
    };
});
//# sourceMappingURL=projectile.js.map