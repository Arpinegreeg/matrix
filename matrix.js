module.exports = {
	printMatrix: function(m) {
        if(null==m)
        {
            console.log(null);
            return;
        }
        for(i=0; i<m.length; i++)
        {
            for(j=0; j<m[0].length; j++)
                process.stdout.write(m[i][j].toString() + " ");
            console.log();
        }
    }
}