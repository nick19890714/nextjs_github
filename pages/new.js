import React, { useEffect, useState } from "react";


const New = () => {
    const [data, setData] = useState();
    useEffect(async () => {
        if (!data) {
            const res = await fetch('http://localhost:3000/nextjs_github/api/hello').catch((error) => { console.log(error) });
            if (res?.status === 200) {
                const datas = await res?.json();
                console.log('datas', datas);
                setData(datas.name);
            } else {
                setData(123);
            }
        }

    }, [data, setData]);
    console.log('data', data);
    return (
        <div>{`This is New ${data}`}</div>
    )
}

export default New;