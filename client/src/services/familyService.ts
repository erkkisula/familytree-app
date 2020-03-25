import { FamilyType } from '../types/FamilyType';

const basePath = 'http://localhost:8080/api/v1/family';

export function getAll(): Promise<Array<FamilyType>> {
    return fetch(basePath + '/all', {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}

export function getById(id: string): Promise<FamilyType> {
    return fetch(basePath + '/' + id, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}
