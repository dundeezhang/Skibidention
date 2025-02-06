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
        // places
        node.textContent = node.textContent.replace(
            /\bCanada\b/gi,
            "Maple Syrup Country"
        );
        node.textContent = node.textContent.replace(
            /\bUnited States\b/gi,
            "OHIO Land"
        );
        node.textContent = node.textContent.replace(
            /\bChina\b/gi,
            "TIANANMEN SQUARE"
        );
        node.textContent = node.textContent.replace(
            /\bbeen chilling\b/gi,
            "BING QILLING"
        );
        node.textContent = node.textContent.replace(/\bthe\b/gi, "SIGMA");
        node.textContent = node.textContent.replace(/\bthe\b/gi, "SIGMA");
        node.textContent = node.textContent.replace(/\bthe\b/gi, "SIGMA");
        node.textContent = node.textContent.replace(/\bthe\b/gi, "SIGMA");
        node.textContent = node.textContent.replace(/\bthe\b/gi, "SIGMA");
        node.textContent = node.textContent.replace(/\bthe\b/gi, "SIGMA");
        node.textContent = node.textContent.replace(/\bthe\b/gi, "SIGMA");
        node.textContent = node.textContent.replace(/\bthe\b/gi, "SIGMA");
        node.textContent = node.textContent.replace(/\bthe\b/gi, "SIGMA");
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
