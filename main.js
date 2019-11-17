const util1 = require("./util.js");
const util2 = require("./matrix.js");

m1 = [ [1, 2],
       [3, 4],
       [5, 6] ];

m2 = [ [1, 2, 3, 4],
       [5, 6, 7, 8] ];


util2.printMatrice(util1.mutiplyMatrices(m1, m2));