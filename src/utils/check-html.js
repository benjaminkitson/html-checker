export default function checkHtml(html) {
    const validTags = ["div", "p", "h1", "h2"]

    const currentCharInfo = {
        isTag: false,
        isChild: false,
        currentTag: undefined,
        isValidTag: false,
        errorCount: 0
    }

    const chars = html.split("");

    chars.forEach((char, index) => {
        const { isTag, isChild, currentTag, isValidTag, errorCount } = currentCharInfo;
        const isTagStart = char === "<";
        const isTagEnd = char === ">";
        const isClosingTag === isTag && char === "/";

        if (!isTag && !isChild && !isTagStart) {
            errorCount++
        }

        if (isTag && !isClosingTag) {
            currentTag += char
        }

        if (isTagStart) {
            currentCharInfo.isTag = true
            currentCharInfo.currentTag = ""
        }

    })
}
