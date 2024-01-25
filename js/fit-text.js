function measureText(pText, pFontSize, pFamily, pWeight) {
	var lDiv = document.createElement('div');

	document.body.appendChild(lDiv);

	if (pFamily != null) {
		lDiv.style.fontFamily = pFamily;
	}
	if (pWeight != null) {
		lDiv.style.fontWeight = pWeight;
	}
	lDiv.style.fontSize = "" + pFontSize + "px";
	lDiv.style.position = "absolute";
	lDiv.style.left = -1000;
	lDiv.style.top = -1000;

	lDiv.innerHTML = pText;

	var lResult = {
		width: lDiv.clientWidth,
		height: lDiv.clientHeight
	};

	document.body.removeChild(lDiv);
	lDiv = null;

	return lResult;
}

function fitText(el) {
	var text = el.innerText;
	var fsize = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));
	var fam = window.getComputedStyle(el, null).getPropertyValue('font-family');
	var weight = window.getComputedStyle(el, null).getPropertyValue('font-weight');
	var available = el.getBoundingClientRect().width * 0.95;
	var oneRem = parseInt(getComputedStyle(document.documentElement).fontSize);
	var maxFont = el.tagName.toLowerCase() == 'h1' ? oneRem * 4 : oneRem * 2;
	
	var measured = measureText(text, fsize, fam, weight);
	while(measured.width > available && fsize > oneRem * 0.75) {
		fsize -= 0.25;
		measured = measureText(text, fsize, fam, weight);
	}
	
	while(measured.width < available && fsize < maxFont){
		fsize += 0.25;
		measured = measureText(text, fsize, fam, weight);
		if(measured.width > available) {
			fsize -= 0.25;
		}
	}
	
	el.style.fontSize = fsize + 'px';
	return fsize;
}

function findAndRegisterFitTextElements() {
	let ro = new ResizeObserver(entries => {
		let minFontSizeH1 = 160;
		let minFontSizeP = 160;
		entries.forEach(entry => {
			let fontSize = fitText(entry.target);
			if(entry.target.tagName.toUpperCase() == 'P') {
				if(fontSize < minFontSizeP) {
					minFontSizeP = fontSize;
				}
			} else if(fontSize < minFontSizeH1) {
				minFontSizeH1 = fontSize;
			}
		});
		entries.forEach(entry => {
			if(entry.target.tagName.toUpperCase() == 'P') {
				entry.target.style.fontSize = minFontSizeP + 'px';
			} else {
				entry.target.style.fontSize = minFontSizeH1 + 'px';
			}
		});
	});

	var fitTextElements = document.getElementsByClassName("fitText");
	for(let fitTextElement of fitTextElements) {
		fitText(fitTextElement);
		ro.observe(fitTextElement);
	}
}