import { TileProps } from "./tile.props";

export default function Tile({ letter = '', status = 'empty'}:TileProps) {
    return <div className={`tile ${status}`}>{letter}</div>;
}