export default function hello(word = "world") {
    let text = document.getElementById('text');
    let p = document.createElement('p');
    p.textContent = "I'm a new paragraph.";
    text?.appendChild(p);
    return `Hello ${word} !`;
}
//# sourceMappingURL=hello.js.map