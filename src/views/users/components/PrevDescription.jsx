const PrevDescription = ({ descriptions }) => {
  return (
    <div style={{
      height: '60%',
      gap: '20px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: '30px',
      overflowX: 'auto',
      width: '74.1vw',
      boxSizing: 'border-box',
    }}>
      {descriptions?.map((des, idx) => (
        <div key={idx} style={{
          background: '#4258ff',
          height: '90%',
          width: '400px',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flexShrink: 0,
          padding: '20px',
          boxSizing: 'border-box',
          color:'white',
        }}>
          <div style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
          }}>
            <div style={{
              overflowY: 'scroll',
              wordWrap: 'break-word',
              height: '50%',
              marginBottom: '10px',
              boxSizing: 'border-box',
            }}>
              <div style={{fontWeight:'600', marginBottom:'10px'}}>Descripción:</div>
              {des.description}
            </div>
            <div style={{
              overflowY: 'scroll',
              wordWrap: 'break-word',
              height: '50%',
              boxSizing: 'border-box',
            }}>
              <div style={{fontWeight:'600', marginBottom:'10px'}}>Prescripción:</div>
              {des.prescription}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrevDescription;