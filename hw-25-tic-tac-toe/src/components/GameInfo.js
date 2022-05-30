const GameInfo = ({ winState, history, jumpTo, status }) => {
    return (
        <div className={`game-info ${winState}`}>
            <div className="game-info__status">{status}</div>

            <ol className="game-info__list">
                {history.map((step, index) => {
                    const isStartStep = index === 0;

                    return (
                        <li key={index}>
                            <button onClick={jumpTo(index)}>
                                {isStartStep
                                    ? `Go to game start`
                                    : `Go to move #${index}`}
                            </button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default GameInfo;
