const DOM = document.getElementsByClassName('code-text')[0]
let TEXT = DOM.innerHTML, newTEXT = '';

const SYNTAX = {
    String: '#008064',
    Operator: '#a365dd',
    Object: '#cc2a4a',
    Method: '#ec1616'
}


TEXT.split('<br>').forEach(x => {
    newTEXT += x
        .replace(/'([^']*)'/g,`<span style="color: ${SYNTAX.String}">\'$1\'</span>`)
        .replace('console',`<span style="color: ${SYNTAX.Object}">console</span>`)
        .replace('log',`<span style="color: ${SYNTAX.Method}">log</span`)
        .replace('import',`<span style="color: ${SYNTAX.Object}">import </span`)
        .replace('as',`<span style="color: ${SYNTAX.Object}">as</span`)
        .replace('from',`<span style="color: ${SYNTAX.Object}">from</span`)
    
    newTEXT += '<br>'
});




DOM.innerHTML = newTEXT;