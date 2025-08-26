import InputForm from "./InputForm"

function Model({closeDialog}) {
    return (
        <div className="Backdrop" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
        }} >
            <div className="modal" tabIndex="-1" style={{
                display: 'block',
                position: 'relative',
                width: 'auto',
                maxWidth: '100%',
                margin: '1.75rem auto',
                pointerEvents: 'none'
            }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Welcom To Your MarketPlacee</h5>
                            <button type="button" className="btn-close" onClick={closeDialog}></button>
                        </div>
                        <div className="modal-body">
                            <InputForm />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeDialog}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Model;