export default function() {
	const appVersion = navigator.appVersion;
	const isAndroid = (/android/gi).test(appVersion);
	const isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
	const probablyMobile = (isAndroid || isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
	return probablyMobile;
}