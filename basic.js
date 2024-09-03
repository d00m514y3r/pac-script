function FindProxyForURL(url, host) {
	"use strict";
	if (/(?:^|\.)ganjoor\.net$/.test(host)) return "DIRECT";
	if (/(?:^|\.)torob\.com$/.test(host)) return "DIRECT";
	if (/(?:^|\.)desmos\.com$/.test(host)) return "DIRECT";
	if (/(?:^|\.)skyroom\.online$/.test(host)) return "DIRECT";
	if (/(?:^|\.)y\.com\.sb$/.test(host)) return "DIRECT";
	if (/(?:^|\.)datura\.network$/.test(host)) return "DIRECT";
	if (/(?:^|\.)taaghche\.com$/.test(host)) return "DIRECT";
	if (/(?:^|\.)karlancer\.com$/.test(host)) return "DIRECT";
	if (/(?:^|\.)motamem\.org$/.test(host)) return "DIRECT";
	if (/(?:^|\.)ir$/.test(host)) return "DIRECT";
	if (/(?:^|\.)lichess.*\.org$/.test(host)) return "DIRECT";
	if (/(?:^|\.)mohit\.online$/.test(host)) return "DIRECT";
	
	if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
	
	if (isResolvable("192.168.1.42:8086"))
	{
		conosle.log("phone was reachable");
		return "SOCKS5 192.168.1.42:8086";
	}
  	else {
		console.log("phone was not reachable");
		return "SOCKS5 localhost:9050, SOCKS localhost:9050";
	}
}
