function AFactory() {
    return { nom: "", B: BFactory() };
}

function BFactory() {
    return { sexe: "", A: AFactory() };
}
