import React, { useEffect } from 'react'

const Editor = () => {

    useEffect(() => {
        fetch("data/config").then(d => d.json()).then(d => console.log(d))
    }, [])

    return <div>Test2</div>
}

export default Editor