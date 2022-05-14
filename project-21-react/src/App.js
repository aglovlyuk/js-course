import Title from "./components/Title/Title";
import { useState } from "react";

function App() {
    const [isOpenedTitle, setIsOpenedTitle] = useState(false);

    const handleOpen = () => {
        setIsOpenedTitle(true);
    };

    if (isOpenedTitle === true) {
        return <Title name="It's my first React component" type="normal" />;
    }

    return (
        <button onClick={handleOpen} className="btn-opener">
            Open title
        </button>
    );
}

export default App;
