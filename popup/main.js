import { domainMap, getLang, setLang } from '../utils.mjs';
// import * as thing lol

const currentLang = await getLang();
const select = document.querySelector('#lang-select');

// https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements
for (const lang in domainMap) {
	const option = document.createElement('option');

	option.value = lang;
	option.text = lang;

	option.onclick = (event) => {
		setLang(select.value).catch(console.error);
	};

	if (currentLang == lang) {
		option.selected = true;
	}

	select.append(option);
}
