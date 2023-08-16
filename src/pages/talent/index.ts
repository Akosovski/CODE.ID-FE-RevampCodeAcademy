import React, { useEffect, useState } from 'react';
import talent from '../api/talent';

export default function TalentList() {
    const [talentData, setTalentData] = useState<any[]>([]);

    useEffect(() => {
        talent.GetData().then(
            data => {
                setTalentData(data);
            }
        );
    }, []);

    return (
        'Test'
    );
}