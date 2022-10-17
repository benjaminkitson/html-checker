export default function checkHtml(html) {
    const validTags = ["div", "p", "h1", "h2"]

    const currentCharInfo = {
        isTag: false,
        // isChild: false,
        currentTag: undefined,
        isValidTag: false,
        errorCount: 0
    }

    const chars = html.split("");

    chars.forEach((char, index) => {

        // A given character in an html string can be one of the following (ignoring attributes):

        // "<" - beginning of new tag

        // ! Illegal when: tag is already open

        // ">" - end of current tag

        // ! Illegal when: tag is not already open

        // "/" - closing tag indicator

        // ! Illegal when: not found after a valid tag name OR not found after "<"

        // "[char]" - either part of a tag, or part of the html's "child content"

        // ! Illegal when: after "/" in a self closing tag while open

        const { isTag, isChild, currentTag, isValidTag, errorCount } = currentCharInfo;
        const isTagStart = char === "<";
        const isTagEnd = char === ">";
        const isClosingTag = isTag && char === "/";

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
