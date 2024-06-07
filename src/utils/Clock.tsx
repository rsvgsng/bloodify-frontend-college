import React, { useState, useEffect } from 'react';

interface ClockProps {
    initialTime: string;
}

const Clock: React.FC<ClockProps> = ({ initialTime }) => {
    const initialDate = new Date(initialTime);
    const [time, setTime] = useState<Date>(initialDate);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(prevTime => new Date(prevTime.getTime() + 1000));
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    const formatTime = (date: Date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        const strTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
        return strTime;
    };

    return (
        <React.Fragment>
            {formatTime(time)}
        </React.Fragment>
    );
};



export default Clock;
