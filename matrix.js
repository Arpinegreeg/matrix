module.exports = {
	printMatrice: function(m) {
        if(m==null)
        {
            console.log(null);
            return;
        }
        for(let i=0; i<m.length; i++)
        {
            for(let j=0; j<m[0].length; j++)
                process.stdout.write(m[i][j].toString());
            console.log();
        }
    }
}