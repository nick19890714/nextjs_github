import React, { useEffect, useState } from "react";


const New = () => {
    const [data, setData] = useState();
    useEffect(() => {
        if (!data) {
            const res = fetch('');
            const datas = res.json();
            setData(123);
        }

    }, [data]);
    return (
        <div>{`This is New ${data}`}</div>
    )
}

export default New;