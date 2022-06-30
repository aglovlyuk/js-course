import { useState } from "react";

import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";

function App() {
    const [isOpenAlert, setOpenAlert] = useState(false);
    const handleOpen = () => {
        setOpenAlert(true);
    };
    const handleClose = () => setOpenAlert(false);

    return (
        <>
            <div className="buttons">
                <Button color="primary">Primary button</Button>
                <Button color="primary" size="large">
                    Primary large button
                </Button>
                <Button color="secondary">Secondary button</Button>
                <Button color="primary" disabled>
                    Disabled button
                </Button>
            </div>

            <Button onClick={handleOpen} color="primary">
                Open alert
            </Button>
            {isOpenAlert && (
                <Alert color="primary" onClose={handleClose}>
                    Join Tripma today and save up to 20% on your flight using
                    code TRAVEL at checkout. Promotion valid for new users only.
                </Alert>
            )}
        </>
    );
}

export default App;
