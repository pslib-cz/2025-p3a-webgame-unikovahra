import React from 'react'

type ImageDisplayProps = {
    data: {
        imageUrl?: string | null;
        header: string;
    };
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ data }) => {
    return (
        <div>
            {data.imageUrl && (
                <img
                    src={data.imageUrl}
                    alt={data.header}
                    style={{ maxWidth: '100%', marginBottom: '1rem' }}
                />
            )}</div>
    )
}

export default ImageDisplay