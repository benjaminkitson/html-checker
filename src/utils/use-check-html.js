import { useState } from "react";

export default function useCheckHtml(content) {
    const [html, setHtml] = useState(content);
    const checkHtml = () => console.log(html);
    return [html, setHtml, checkHtml];
}
