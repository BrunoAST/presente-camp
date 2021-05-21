import React from 'react';

const Form: React.FC = ({children}) => {
    return (
        <form className="py-32">
            {children}
        </form>
    );
}

export default Form;
