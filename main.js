const util = require("./util.js");

m1 = [ [1, 2],
       [3, 4],
       [5, 6] ];

m2 = [ [1, 2, 3, 4],
       [5, 6, 7, 8] ];

util.printMatrix(util.mutiplyMatrices(m1, m2));