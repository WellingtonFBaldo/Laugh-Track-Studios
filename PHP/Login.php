<?php
	require_once 'lib/Facebook/autoload.php';

	$fb = new \Facebook\Facebook([
	  'app_id' => '759909557701241',
	  'app_secret' => 'ae8c16d3d1a382a0146296e85b589a5b',
	  'default_graph_version' => 'v2.10',
	  //'default_access_token' => '{access-token}', // optional
	]);

	$helper = $fb->getRedirectLoginHelper();
	//var_dump($helper);

	$permissions = ['email']; // Optional permissions
	$loginUrl = $helper->getLoginUrl('https://example.com/fb-callback.php', $permissions);

	echo '<a href="' . htmlspecialchars($loginUrl) . '">Log in with Facebook!</a>';

	try {
	  $accessToken = $helper->getAccessToken();
	} catch(Facebook\Exceptions\FacebookResponseException $e) {
	  // When Graph returns an error
	  echo 'Graph returned an error: ' . $e->getMessage();
	  exit;
	} catch(Facebook\Exceptions\FacebookSDKException $e) {
	  // When validation fails or other local issues
	  echo 'Facebook SDK returned an error: ' . $e->getMessage();
	  exit;
	}
?>