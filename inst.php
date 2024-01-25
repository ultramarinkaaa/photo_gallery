$servername = «openserver»;

$username = «root»;

$password = «»;

$dbname = «airline»;

// Создаем соединение

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {

die(«Connection failed: » . mysqli_connect_error());

}
