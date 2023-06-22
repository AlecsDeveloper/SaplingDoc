const MENU = document.getElementById('menu');

const list = [
    {
        class: 'cl1',
        content: [
            {
                type: 'element',
                href: 'introduccion.html#Introduccion',
                display: 'Introduccion'
            },
            {
                type: 'elementList',
                elements: [
                    { href: 'introduccion.html#¿Que-es?', display: '¿Que es?' },
                    { href: 'introduccion.html#¿Como-funciona?', display: '¿Como funciona?' },
                    { href: 'introduccion.html#Instancia', display: 'Instancia GameTest' }
                ]
            }
        ]
    },
    {
        class: 'cl2',
        content: [
            {
                type: 'element',
                href: 'tnt.html#Introduccion',
                display: 'Módulo TNT'
            },
            {
                type: 'elementList',
                elements: [
                    { href: 'tnt.html#¿Que-es?', display: '¿Que es?' },
                    { href: 'tnt.html#Comandos', display: 'Comandos' }
                ]
            },
            { type: 'space' },
            {
                type: 'element',
                href: 'tnt.html#Funciones',
                display: 'Funciones'
            },
            {
                type: 'elementList',
                elements: [
                    { href: 'tnt.html#tntDuping', display: 'tntDuping' },
                    { href: 'tnt.html#tntDropAllBlocks', display: 'tntDropAllBlocks' },
                    { href: 'tnt.html#tntNoExplodes', display: 'tntNoExplodes' },
                    { href: 'tnt.html#tntNoDrops', display: 'tntNoDrops' }
                ]
            }
        ]
    },
    {
        class: 'cl1',
        content: [
            {
                type: 'element',
                href: 'world.html#Introduccion',
                display: 'Módulo World'
            },
            {
                type: 'elementList',
                elements: [
                    { href: 'world.html#¿Que-es?', display: '¿Que es?' },
                    { href: 'world.html#Comandos', display: 'Comandos' }
                ]
            },
            { type: 'space' },
            {
                type: 'element',
                href: 'world.html#Funciones',
                display: 'Funciones'
            },
            {
                type: 'elementList',
                elements: [
                    { href: 'world.html#endPortalGBD', display: 'endPortalGBD' },
                    { href: 'world.html#anvilBedrockBreaker', display: 'anvilBedrockBreaker' },
                    { href: 'world.html#cauldronBedrockBreaker', display: 'cauldBedrockBreaker' },
                    { href: 'world.html#renewableSoulSand', display: 'renewableSoulSand' }
                ]
            }
        ]
    },
    {
        class: 'cl2',
        content: [
            {
                type: 'element',
                href: 'entity.html#Introduccion',
                display: 'Módulo Entity'
            },
            {
                type: 'elementList',
                elements: [
                    { href: 'entity.html#¿Que-es?', display: '¿Que es?' },
                    { href: 'entity.html#Comandos', display: 'Comandos' },
                ]
            },
            { type: 'space' },
            {
                type: 'element',
                href: 'entity.html#Funciones',
                display: 'Funciones'
            },
            {
                type: 'elementList',
                elements: [
                    { href: 'entity.html#guardianDropSponges', display: 'guardianDropSponges' },
                    { href: 'entity.html#huskDropSand', display: 'huskDropSand' },
                    { href: 'entity.html#ghastDropQuartz', display: 'ghastDropQuartz' }, 
                    { href: 'entity.html#silverfishDropGravel', display: 'silverfishDropGravel' },
                    { href: 'entity.html#pigmansFarmWarts', display: 'pigmansFarmWarts' }
                ]
            }
        ]
    },
    {
        class: 'cl1',
        content: [
            {
                type: 'element',
                href: 'tweaks.html#Introduccion',
                display: 'Módulo Tweaks'
            },
            {
                type: 'elementList',
                elements: [
                    { href: 'tweaks.html#¿Que-es?', display: '¿Que es?' },
                    { href: 'tweaks.html#Comandos', display: 'Comandos' },
                ]
            },
            { type: 'space' },
            {
                type: 'element',
                href: 'tweaks.html#Funciones',
                display: 'Funciones'
            },
            {
                type: 'elementList',
                elements: [
                    //{ href: 'tweaks.html#', display: '' },
                    { href: 'tweaks.html#autoCrafting', display: 'autoCrafting' },
                    { href: 'tweaks.html#flippinCactus', display: 'flippinCactus' },
                    { href: 'tweaks.html#toolChanger', display: 'toolChanger' },
                    { href: 'tweaks.html#instamineObsidian', display: 'instamineObsidian' }
                ]
            }
        ]
    }
]


// Logic
list.forEach(dom => {
    // Div
    const menu = document.createElement('ul');
        menu.classList.add('list');
         menu.classList.add(dom.class);
    // Content
    dom.content.forEach(_ => {
        if (_.type === 'element') {
            const li = document.createElement('li');
                li.classList.add('element');
            const a = document.createElement('a');
                a.setAttribute('href',_.href);
                a.innerText = _.display;
            // Append element
            li.appendChild(a);
            menu.appendChild(li);
        } else if (_.type === 'elementList') {
            const ul = document.createElement('ul');
                ul.classList.add('elementList');
                _.elements.forEach(x => {
                    const li = document.createElement('li');
                        li.classList.add('subElement');
                    const a = document.createElement('a');
                        a.setAttribute('href',x.href);
                        a.innerText = x.display;
                    // Append ul
                        li.append(a)
                        ul.appendChild(li);
                });
                // Append list
                menu.append(ul);
        } else if (_.type === 'space') {
            const div = document.createElement('div');
    	        div.setAttribute('style','padding: 4px;');
                menu.appendChild(div);
            }
        });
        
        // Append
        MENU.appendChild(menu)
            const space = document.createElement('div');
            space.classList.add('space');
        MENU.appendChild(space)
});


// Icon
const icon = document.createElement('link');
icon.setAttribute('rel','icon');
icon.setAttribute('href','../assets/MCBE.webp');
document.head.appendChild(icon)