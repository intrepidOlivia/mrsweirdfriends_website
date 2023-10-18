if (window.weirdFriends === undefined) {
    window.weirdFriends = {};
}

window.addEventListener('load', () => {
    // Set up current domain
    const thisURL = new URL(navigation.currentEntry.url);
    window.weirdFriends.domain = thisURL.host;
});

navigation.addEventListener("navigate", (e) => {
    const destination = new URL(e.destination.url);
    if (destination.host !== window.weirdFriends.domain) {
        return;
    }
    console.log('Destination:', destination);
    const url = new URL(e.destination.url);
    e.intercept({
        handler: () => {
            // Push new path onto the stack and render new page
            fetchAndRenderPage(destination.pathname);
        }
    });
});

function fetchAndRenderPage(path) {
    fetchResource(path)
    .then(response => {
        const headCapture = new RegExp(/<head>.*<\/head>/, 'gs');
        const bodyCapture = new RegExp(/<body>.*<\/body>/, 'gs')

        const headMatch = response.match(headCapture);
        const bodyMatch = response.match(bodyCapture);

        replacePageContent(headMatch, document.head);
        replacePageContent(bodyMatch, document.body);
    });
}

function replacePageContent(htmlString, parent) {
    const template = document.createElement('template');
    template.innerHTML = `<html>${htmlString}</html>`;
    Array.from(parent.childNodes).forEach(child => {
        child.remove();
    });
    Array.from(template.content.childNodes).forEach(node => {
        appendRoutedElement(node, parent);
    });
}

function appendRoutedElement(elem, parent) {
    if (elem.nodeName === 'SCRIPT') {
        const script = document.createElement('script');
        script.src = elem.src;
        console.log('Appending script:', script);
        parent.appendChild(script);
    } else {
        parent.appendChild(elem);
    }
}

async function fetchResource(uri) {
    return new Promise((resolve, reject) => {
        fetch(uri)
        .then(async response => {
            if (response.status !== 200) {
                reject(response);
                return;
            }

            resolve(await response.text());
        });
    });
}