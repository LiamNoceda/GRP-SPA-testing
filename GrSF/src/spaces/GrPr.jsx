import React, { use, useEffect } from "react";

export function ProfileMain() {
    useEffect(() => {
        document.title = 'Profile Space';
    }, []);
    return(
        <div>
            <p>HHHHH</p>
        </div>
    );
}

export function ProfileAside() {
    return(
        <div>
            <p>JJJJ</p>
        </div>
    );
}