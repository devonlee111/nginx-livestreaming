<?php
$target_dir = "/usr/local/nginx/uploads/";
$target_file = $target_dir . basename($_FILES["uploadFile"]["name"]);
echo "name " . $_FILES["uploadFile"]["name"];
echo "type" . $_FILES["uploadFile"]["type"];
$uploadOk = 1;

// Check if file already exists
$file_type = $_FILES["uploadFile"]["type"];
echo $target_file;

if (file_exists($target_file)) {
	echo "Sorry, file already exists.";
	$uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
	echo "Sorry, your file was not uploaded.";
	// if everything is ok, try to upload file
} else {
	if (move_uploaded_file($_FILES["uploadFile"]["tmp_name"], $target_file)) {
		echo "The file ". basename( $_FILES["uploadFile"]["name"]). " has been uploaded.";
	} else {
		echo "Sorry, there was an error uploading your file.";
	}
}
?>
