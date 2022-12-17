const basicMap = ()=>{

    const elements = ['Fire', 'Air', 'Water'];

    console.log(elements.map(m=>`name: '${m}'`).join(' OR '))
}

basicMap();