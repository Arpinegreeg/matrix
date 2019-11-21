module.exports = {
	mutiplyMatrices: function(m1, m2) {
        m1RowsCount = m1.length;
        m1ColumnsCount = m1[0].length;
        m2RowsCount = m2.length;
        m2ColumnsCount = m2[0].length;

        if(m1ColumnsCount!=m2RowsCount)
            return null;

        rm = [];
        for(i=0; i<m1RowsCount; i++)
            rm[i] = [];

        for(l=0; l<m1RowsCount; l++)
        {
            r = 0;
            for(i=0; i<m2ColumnsCount; i++)
            {
                for(j=0; j<m1ColumnsCount; j++)
                    r += m1[l][j] * m2[j][i];
                rm[l][i] = r;
                r = 0;
            }
        }

        return rm;
    },
    printMatrix: function(m) {
        if(null==m)
            return;
        for(i=0; i<m.length; i++)
        {
            for(j=0; j<m[0].length; j++)
                process.stdout.write(m[i][j].toString() + " ");
            console.log();
        }
    }
};