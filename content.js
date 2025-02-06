function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
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
