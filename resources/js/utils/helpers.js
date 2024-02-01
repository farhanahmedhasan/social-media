export function autoSizeTextArea(textAreaRef) {
    const textArea = textAreaRef.current
    textArea.style.height = 'auto'
    textArea.style.height = `${textArea.scrollHeight}px`
}
