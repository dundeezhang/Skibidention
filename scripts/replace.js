function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(/\bbest\b/gi, "SIGMA");
        node.textContent = node.textContent.replace(
            /\btoilet\b/gi,
            "SKIBIDI TOILET"
        );
        node.textContent = node.textContent.replace(
            /\bComputer Sciece\b/gi,
            "HOMELESS SCIENCE"
        );
        node.textContent = node.textContent.replace(
            /\bmath\b/gi,
            "SMELLY SCIENCE"
        );
        node.textContent = node.textContent.replace(
            /\bengineer\b/gi,
            "DEPRESSION SCIENCE"
        );
        // places
        node.textContent = node.textContent.replace(
            /\bCanada\b/gi,
            "MAPLE SYRUP COUNTRY"
        );
        node.textContent = node.textContent.replace(
            /\bUnited States\b/gi,
            "OHIO LAND"
        );
        node.textContent = node.textContent.replace(/\bUSA\b/gi, "OHIO LAND");
        node.textContent = node.textContent.replace(/\bU.S.\b/gi, "OHIO LAND");
        node.textContent = node.textContent.replace(
            /\bChina\b/gi,
            "TIANANMEN SQUARE"
        );
        // memes
        node.textContent = node.textContent.replace(
            /\bdeepseek\b/gi,
            "CHATGPT 2"
        );
        node.textContent = node.textContent.replace(/\bchatgpt\b/gi, "MOM");
        node.textContent = node.textContent.replace(/\bgemini\b/gi, "DAD");
        node.textContent = node.textContent.replace(
            /\bbeen chilling\b/gi,
            "BING QILLING"
        );
        node.textContent = node.textContent.replace(
            /\bjohn cenab/gi,
            "BING QILLING MAN"
        );
        // slangs
        node.textContent = node.textContent.replace(/\bvibe\b/gi, "AURA");
        node.textContent = node.textContent.replace(/\benergy\b/gi, "AURA");
        node.textContent = node.textContent.replace(
            /\bpersonality\b/gi,
            "AURA"
        );
        node.textContent = node.textContent.replace(/\blove\b/gi, "RIZZ");
        node.textContent = node.textContent.replace(/\blover\b/gi, "RIZZLER");
        node.textContent = node.textContent.replace(/\blovers\b/gi, "RIZZLERS");
        node.textContent = node.textContent.replace(
            /\blook good\b/gi,
            "LOOKS MAXXING"
        );
        node.textContent = node.textContent.replace(
            /\blooking good\b/gi,
            "LOOKS MAXXING"
        );
        node.textContent = node.textContent.replace(
            /\bcheater\b/gi,
            "BILL CLINTON"
        );
        node.textContent = node.textContent.replace(
            /\bwikipedia\b/gi,
            "SKIBPEDIA"
        );
        node.textContent = node.textContent.replace(
            /\bkilling\b/gi,
            "UNSKIBIDIING"
        );
        node.textContent = node.textContent.replace(/\bkill\b/gi, "UNSKIBIDI");
        node.textContent = node.textContent.replace(
            /\bmurder\b/gi,
            "UNSKIBIDI"
        );
        node.textContent = node.textContent.replace(/\bbible\b/gi, "SKIBIDI");
        node.textContent = node.textContent.replace(
            /\bchristian\b/gi,
            "CROSS RIZZLER"
        );
        node.textContent = node.textContent.replace(
            /\bchristian\b/gi,
            "CRESCENT AND STAR RIZZLER"
        );
        node.textContent = node.textContent.replace(
            /\bJEWISH\b/gi,
            "DAVID STAR RIZZLER"
        );
        node.textContent = node.textContent.replace(
            /\btoilet\b/gi,
            "SKIBIDI TOILET"
        );
        node.textContent = node.textContent.replace(
            /\bmoney\b/gi,
            "FAT STACKS"
        );
        node.textContent = node.textContent.replace(
            /\bdog\b/gi,
            "DOGE AHH THING"
        );
        node.textContent = node.textContent.replace(
            /\bcat\b/gi,
            "NYAN CAT AHH THING"
        );
        node.textContent = node.textContent.replace(
            /\bINDIA\b/gi,
            "CURRY LAND"
        );
        node.textContent = node.textContent.replace(
            /\benglish\b/gi,
            "UNFRENCHED FRENCH"
        );
        node.textContent = node.textContent.replace(
            /\bfrench\b/gi,
            "REFRENCHED FRENCH"
        );
        node.textContent = node.textContent.replace(
            /\bbritish\b/gi,
            "CHEWSDAY INNIT PEOPLE"
        );
        node.textContent = node.textContent.replace(
            /\bsea\b/gi,
            "BIKINI BOTTOM"
        );
        node.textContent = node.textContent.replace(
            /\bdelusional\b/gi,
            "DELULU"
        );
        node.textContent = node.textContent.replace(/\bsad\b/gi, "WOMP WOMP");
        node.textContent = node.textContent.replace(/\bfor real\b/gi, "ON GOD");
        node.textContent = node.textContent.replace(
            /\bterrorist\b/gi,
            "BIN LADEN"
        );
    } else {
        node.childNodes.forEach(replaceText);
    }
}

function observeChanges() {
    const observer = new MutationObserver((mutations) => {
        observer.disconnect(); // Stop observing to prevent infinite loop
        mutations.forEach((mutation) => {
            if (
                mutation.type === "childList" ||
                mutation.type === "characterData"
            ) {
                mutation.addedNodes.forEach(replaceText);
                if (mutation.target.nodeType === Node.TEXT_NODE) {
                    replaceText(mutation.target);
                }
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true,
        }); // Reconnect observer
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
    });
}

window.onload = () => {
    replaceText(document.body);
    observeChanges();
};
