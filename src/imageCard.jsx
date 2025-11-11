export function ImageCard({url, title, description, author, dateTime }) {
  return (
    <div className="card" style={{
        fontFamily:'system-ui, Avenir, Helvetica, Arial, sans-serif',
        boxShadow:'4px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius:"12px",
        padding:'16px',
        border:'1px solid #e2e2e2ff',
        textAlign:'center'
    }}>
        <img src={url} width={'100%'} alt={title} style={{
            borderRadius:'12px'
        }} />
        <h2 style={{margin:'12px auto'}}>{title}</h2>
        <p>{description}</p>
        <p style={{margin:'8px auto'}}><span style={{fontWeight:'bold'}}>Author:</span> {author}</p>
        <p style={{margin:'8px auto'}}><span style={{fontWeight:'bold'}}>Uploaded:</span> {dateTime}</p>
    </div>
  );
}   