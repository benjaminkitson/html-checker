export default function checkHtml(html) {
    const validTags = ["div", "p", "h1", "h2"];

    const currentCharInfo = {
        isTag: false,
        expectClosingTag: false,
        // isChild: false,
        currentTag: undefined,
        isValidTag: false,
        errorCount: 0,
    };

    const chars = html.split("");

    chars.forEach((char, index) => {

        // A given character in an html string can be one of the following (ignoring attributes):

        // "<" - beginning of new tag

        // ! Illegal when: pointed at a tag

        // ">" - end of current tag

        // ! Illegal when: not pointed at a tag OR pointed at a closing tag not preceded by "/"

        // "/" - closing tag indicator

        // ! Illegal when: at the beginning of an opening tab

        // "[char]" - either part of a tag, or part of the html's "child content"

        // ! Illegal when: after "/" in a self closing tag while open

        const { isTag, expectClosingTag, currentTag} = currentCharInfo;
        const isTagStart = char === "<";
        const isTagEnd = char === ">";
        const isClosing = char === "/";

        if (isTag && !isTagStart) {
            currentCharInfo.errorCount++;
        }

        if (!isTag && isTagEnd) {
            currentCharInfo.errorCount++;
        }

        if (isClosing && currentTag === "") {
            currentCharInfo.errorCount++;
        }

    })
}
