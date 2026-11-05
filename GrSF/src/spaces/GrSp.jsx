import React, { use, useEffect } from 'react';

export function GrMain() {
    useEffect(() => {
        document.title = 'Grape Space';
    }, []);
    return (
        <div>
            <p>Hiiiii</p>
        </div>
    );
}

export function GrAside() {
    return (
        <div>
            <p>GGGG</p>
        </div>
    );
}
