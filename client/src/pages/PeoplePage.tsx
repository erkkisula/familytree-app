import React, { useState, useEffect } from 'react';
import { PersonType } from '../types/PersonType';
import { getAll } from '../services/personService';
import { PersonHeader } from '../components/Person';
import PeopleTable from '../components/PeopleTable';
import { ButtonSmall } from '../components/Button';
import { Link } from 'react-router-dom';

const PeoplePanel = () => (
    <div className="list-panel">
        <div className="list-panel__btn">
            <Link to={'/viewall/families'}>
                <ButtonSmall text="Families" />
            </Link>
        </div>
        <div className="list-panel__head">
            <div className="list-panel__text">List of all</div>
        </div>
    </div>
);

export const PeoplePage = () => {
    const [items, setItems] = useState<PersonType[]>([]);

    const fetchAll = async () => {
        window.scrollTo(0, 0);
        await getAll().then((data) => {
            setItems(data);
        });
    };

    useEffect(() => {
        fetchAll();
    }, []);

    return (
        <div className="list-page">
            <div className="list-page__content">
                <PeoplePanel />
                <PersonHeader />

                <div className="list-page__table">
                    <PeopleTable visiblePeople={items.sort((a, b) => a.name.localeCompare(b.name))} />
                </div>
            </div>
        </div>
    );
};

export default PeoplePage;
