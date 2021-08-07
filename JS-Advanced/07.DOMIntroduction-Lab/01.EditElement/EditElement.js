function editElement(element, match, replacer) {
    const matcher = new RegExp(match, 'g');
    const result = element.textContent.replace(matcher, replacer);
    element.textContent = result;
}