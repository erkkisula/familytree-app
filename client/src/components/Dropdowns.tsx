import React from 'react';
import { FamilyType } from '../types/FamilyType';
import { PersonType } from '../types/PersonType';
import { calculateAgeByPerson } from '../services/util';

interface familyDropdownProps {
    families: FamilyType[];
    handleChange: any;
}

export const FamilyDropdown = ({ families, handleChange }: familyDropdownProps) => (
    <>
        <div className="person-form__input">
            <label htmlFor="families">Family</label>
        </div>
        <select id="families" name="familyId" onChange={handleChange}>
            {families.map((item, i) => {
                return (
                    <option value={item.id} key={i}>
                        {item.name}
                    </option>
                );
            })}
        </select>
    </>
);

interface ParentDropdownProps {
    parents: PersonType[];
    onChange: any;
    familiyId: string;
    gender: string;
}

export const ParentDropdown = ({ parents, onChange, familiyId, gender }: ParentDropdownProps) =>
    parents.length ? (
        <>
            <div className="person-form__input">
                <label>Select</label>
            </div>
            <select id="parents" name={gender === 'male' ? 'fatherId' : 'motherId'} onChange={onChange}>
                <option value="">Please select</option>
                {parents.map((item, i) => {
                    const age = calculateAgeByPerson(item);
                    if (familiyId === item.family && gender === item.gender) {
                        return (
                            <option value={item.id} key={i}>
                                {item.name}
                                {', '}
                                {age}
                            </option>
                        );
                    }
                })}
            </select>
        </>
    ) : null;
