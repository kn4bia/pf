var mysql = require('mysql');

var con = mysql.createConnection({
  host: "rh8",
  user: "dssm",
  password: "ka1ckt1999",
  database: "dssm"
});

con.connect();

  con.query("SELECT * FROM sys", function (err, result, fields) {
	  if (err)
	  {
		 console.error(err);
	  }
	  else
	  {
		  console.log(result)
	  }
  });

con.end()
