import { useState } from "react";

const TestComponents = () => {

    const [bgColor, setBgColor] = useState('green');

    return <div>
        <article
            title="Pokemon"
            style={{ backgroundColor: bgColor }}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ratione ipsa dolorum, maxime ad tempore.
        </article>
        <button
            onClick={() => setBgColor(bgColor === 'green' ? 'blue' : 'green')}
        >Pulsa para modificar</button>
    </div>;
}

export default TestComponents;