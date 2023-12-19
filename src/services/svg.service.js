const svgs = {
    trash: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+
    Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />`,
}

function getSvg(iconName) {
    return svgs[iconName]
}

export const svgService = { getSvg }