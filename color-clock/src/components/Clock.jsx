import { format } from 'date-fns';

export function Clock({ date, color, onColorChange, ...props }) {
    return (
        <>
            <div className='clockContainer'>
                <p className="clock" style={{ color: color }}> {format(date, 'MM/dd/yyyy HH:mm:ss.SSS')} </p>
            </div>
            <div>
                <label htmlFor="colorPicker">Color: </label>
                <input type="color" id="colorPicker" onChange={onColorChange}></input>
            </div>
        </>
    )
}