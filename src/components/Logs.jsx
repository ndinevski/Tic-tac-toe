
export default function Logs({logs, id}) {
    return (<ul id={id}>
        {logs.slice(0,4).map((log, index)=>{
            return <li key={index} className={index === 0 ? 'highlighted' : undefined}>{log.activePlayer} played {log.x},{log.y}</li>
        })}
    </ul>);
}