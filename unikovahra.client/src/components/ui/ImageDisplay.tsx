import React from 'react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type ImageDisplayProps = {
    data: {
        imageUrl?: string | null;
        header: string;
        
    };
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({data}) => {
    return (
        <div>
            {data.imageUrl && (
            <img
                src={`${API_BASE_URL}${data.imageUrl}`}
                alt={data.header}
                style={{ maxWidth: '100%', marginBottom: '1rem' }}
            />
        )}</div>
    )
}

export default ImageDisplay