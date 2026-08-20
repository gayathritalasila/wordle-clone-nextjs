type GameHeaderProps = {
  onOpenHowToPlay: () => void;
};

export default function GameHeader({
  onOpenHowToPlay,
}: GameHeaderProps) {
  return (
    <div className="game-header">
      <h1 className="title">Wordle</h1>

      <button
        type="button"
        className="help-button"
        onClick={onOpenHowToPlay}
        aria-label="How to play"
        title="How to play"
      >
        ?
      </button>
    </div>
  );
}
