<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- PHP VERSION 1.0 -->
<title><?php echo $_GET['t']; ?></title>

<meta content='<?php echo $_GET['d']; ?>' name='description' />
<link href='<?php echo $_GET['i']; ?>' rel='image_src' />

<?php


$browserAgent = $_SERVER['HTTP_USER_AGENT'];

//Check to see if someone is clicking on the "shared" link to facebook.
$isFB = strrpos(strtolower($_SERVER['HTTP_REFERER']),"facebook.com");


//Is the user on an iPhone?
$isIphoneB = strrpos(strtolower($browserAgent), "iphone");


//Is the user on Safari?
$isSafari = strrpos(strtolower($browserAgent), "safari");





//Now we check to see if user is on iPhone APP.
//isIphoneB should be TRUE and notSafari should be FALSE
if ($isIphoneB != FALSE && $isSafari === FALSE) { //user should be on Facebook APP

	$isFbMobile = 1;
	
} else {
	
	$isFbMobile = 0; //User is on safari, not FB APP
	//print $isFB;	
}

//Check to see if we are being scraped by Facebook, or are we being clicked on by USER
if ($isFB != FALSE  || $isFbMobile == 1){ //if it is a user click on the link

	//print $_SERVER['HTTP_REFERER'];
	header('Location:'.$_GET['u']);
	
} else{ //it's not a user its facebook trying to scrape

	//DO NOTHING
	//HELLO FACEBOOK SHARE
	//print 'refer:'.$_SERVER['HTTP_REFERER'];
}


?>

</head>

<body>
</body>
</html>