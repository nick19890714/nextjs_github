import React, { useEffect, useState } from "react";


const New = () => {
    const [data, setData] = useState();
    useEffect(async () => {
        if (!data) {
            const res = await fetch('http://localhost:3000/api/hello').catch((error) => { console.log(error) });
            if (res.status === 200) {
                const datas = await res?.json();
            } else {
                setData(123);
            }
        }

    }, [data, setData]);
    console.log(data);
    return (
        <div>{`This is New ${data}`}</div>
    )
}

export default New;