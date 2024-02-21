function Button({ name, onChange }) {
    return (
        <div className="button" onClick={onChange}>
            <img alt="Icon" className="disabled" src={{}} />
        </div>
    );
}

export default Button;
