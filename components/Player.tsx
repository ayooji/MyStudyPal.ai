import React from 'react';


interface PlayerProps {
    // The video to play
    video: string;
    // The title of the video
    title?: string;
    // The function to call when the close button is clicked
    onClose: () => void;
}

const Player = ({ video, title, onClose }: PlayerProps) => {
    return (
        <div className="player-container">
            <div className="player-header">
                {title && <h2 className="title">{title}</h2>}
                <button onClick={onClose} className="close-button">
                    &times;
                </button>
            </div>
            <div className="player">
                <video controls autoPlay>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Player;