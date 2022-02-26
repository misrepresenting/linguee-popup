import { domainMap, getLang } from '../utils.mjs';

async function getWord(info) {
	const currentLang = await getLang();

	browser.tabs.create({
		url: `https://${domainMap[currentLang]}/search?source=auto&query=${info.selectionText}`,
	});
}

browser.contextMenus.create({
	id: 'linguee-popup',
	title: "search '%s'",
	contexts: ['selection'],
	onclick: getWord,
});
