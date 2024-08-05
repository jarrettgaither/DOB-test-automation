export function test() {
    return 1;
}

export function addTwo(p1, p2) {
    return p1 + p2;
}

export function multTwo(p1, p2) {
    return p1 * p2;
}

export function subTwo(p1, p2) {
    return p1 - p2;
}

export function divTwo(p1, p2) {
    if (p2 === 0) {
        throw new Error('Division by zero');
    }
    return p1 / p2;
}