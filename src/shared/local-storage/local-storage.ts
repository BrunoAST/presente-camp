const KEY = 'PRESENTE';

export function setItem(item: unknown): void {
    localStorage.setItem(KEY, JSON.stringify(item));
}

export function getItem(): unknown {
    return JSON.parse(localStorage.getItem(KEY) as string);
}
