import React, { useState, useEffect } from 'react';
import './CSS/MarsRover.css';
import axios from 'axios';

const MarsRover = () => {
    // Initialize rover with 'Curiosity' to fetch data on mount
    const [marsPhotos, setMarsPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rover, setRover] = useState('Curiosity');
    const [camera, setCamera] = useState('all');

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Camera options for each rover
    const cameraOptions = {
        Curiosity: [
            { value: 'all', label: 'All Cameras' },
            { value: 'FHAZ', label: 'Front Hazard Avoidance Camera' },
            { value: 'RHAZ', label: 'Rear Hazard Avoidance Camera' },
            { value: 'MAST', label: 'Mast Camera' },
            { value: 'CHEMCAM', label: 'Chemistry and Camera Complex' },
            { value: 'NAVCAM', label: 'Navigation Camera' }
        ],
        Perseverance: [
            { value: 'all', label: 'All Cameras' },
            { value: 'NAVCAM_LEFT', label: 'Navigation Camera - Left' },
            { value: 'NAVCAM_RIGHT', label: 'Navigation Camera - Right' },
            { value: 'MCZ_RIGHT', label: 'Mast Camera Zoom - Right' },
            { value: 'MCZ_LEFT', label: 'Mast Camera Zoom - Left' },
            { value: 'FRONT_HAZCAM_LEFT_A', label: 'Front Hazard Avoidance Camera - Left A' },
            { value: 'FRONT_HAZCAM_RIGHT_A', label: 'Front Hazard Avoidance Camera - Right A' },
            { value: 'REAR_HAZCAM_LEFT', label: 'Rear Hazard Avoidance Camera - Left' },
            { value: 'REAR_HAZCAM_RIGHT', label: 'Rear Hazard Avoidance Camera - Right' },
            { value: 'SKYCAM', label: 'SkyCam' },
            { value: 'SUPERCAM_RMI', label: 'SuperCam Remote Micro Imager' }
        ]
    };

    // Fetch data when rover or camera changes
    useEffect(() => {
        const fetchRoverData = async () => {
            setLoading(true);
            setError(null);
            try {
                const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
                const sol = 1000;
                let apiUrl = `${apiBaseUrl}/api/mars-rover?sol=${sol}&rover=${rover.toLowerCase()}`;
                if (camera !== 'all') {
                    apiUrl += `&camera=${camera}`;
                }

                const response = await axios.get(apiUrl);
                setMarsPhotos(response.data.photos || []);

            } catch (err) {
                // Improved error handling
                setError(`Failed to fetch data: ${err.message}`);
                setMarsPhotos([]); // Clear photos on error
                console.error('API Error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchRoverData();
    }, [rover, camera]);

    const handleRoverChange = (selectedRover) => {
        if (selectedRover === rover) return; // Do nothing if the same rover is selected

        if (selectedRover === 'Curiosity' || selectedRover === 'Perseverance') {
            setRover(selectedRover);
            setCamera('all'); // Reset camera to 'all' when rover changes
            setMarsPhotos([]);
            setError(null);
            setLoading(true);
        }
    };

    const handleCameraChange = (selectedCamera) => {
        if (selectedCamera === camera) return; // Do nothing if the same camera is selected

        setCamera(selectedCamera);
        setMarsPhotos([]);
        setError(null);
        setLoading(true);
    };

    // Format date for display
    const formatDate = (dateString) => {
        if (!dateString) return 'Unknown date';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="marsRoverContainer">
            <div className="pageItems">
                <div className="dropDownContainer">
                    {/* Rover Dropdown */}
                    <div className="menu">
                        <div className="item">
                            <a href="#" className="link" onClick={(e) => e.preventDefault()}>
                                <span>{rover}</span>
                                <svg viewBox="0 0 360 360" xml:space="preserve">
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            id="XMLID_225_"
                                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                                        ></path>
                                    </g>
                                </svg>
                            </a>
                            <div className="submenu">
                                <div className="submenu-item">
                                    <a href="#" className="submenu-link" onClick={(e) => {
                                        e.preventDefault();
                                        handleRoverChange('Curiosity');
                                    }}>Curiosity</a>
                                </div>
                                <div className="submenu-item">
                                    <a href="#" className="submenu-link" onClick={(e) => {
                                        e.preventDefault();
                                        handleRoverChange('Perseverance');
                                    }}>Perseverance</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Camera Dropdown */}
                    <div className="menu">
                        <div className="item">
                            <a href="#" className="link" onClick={(e) => e.preventDefault()}>
                                <span>{cameraOptions[rover].find(opt => opt.value === camera)?.label || 'All Cameras'}</span>
                                <svg viewBox="0 0 360 360" xml:space="preserve">
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            id="XMLID_225_"
                                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                                        ></path>
                                    </g>
                                </svg>
                            </a>
                            <div className="submenu">
                                {cameraOptions[rover].map(option => (
                                    <div key={option.value} className="submenu-item">
                                        <a href="#" className="submenu-link" onClick={(e) => {
                                            e.preventDefault();
                                            handleCameraChange(option.value);
                                        }}>{option.label}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Loading and Error States */}
                {error && <p className="error-message">{error}</p>}

                {/* Image Gallery */}
                <div className="imageGallery">
                    {loading && (
                        <div className="loading-container">
                            <div className="loading-spinner"></div>
                        </div>
                    )}
                    {!loading && marsPhotos.length > 0 ? (
                        marsPhotos.map((photo) => (
                            <div key={photo.id} className="image-container">
                                <div className="image-wrapper">
                                    <img
                                        src={photo.img_src}
                                        alt={`Mars photo from ${rover} - ${photo.camera?.full_name || photo.camera?.name || 'Unknown Camera'}`}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="image-description">
                                    <h3>{photo.camera?.full_name || photo.camera?.name || 'Unknown Camera'}</h3>
                                    <p><strong>Rover:</strong> {rover}</p>
                                    <p><strong>Earth Date:</strong> {formatDate(photo.earth_date)}</p>
                                    <p><strong>Sol:</strong> {photo.sol}</p>
                                    <p><strong>Photo ID:</strong> {photo.id}</p>
                                    {photo.camera?.name && (
                                        <p><strong>Camera Code:</strong> {photo.camera.name}</p>
                                    )}
                                    {photo.rover?.landing_date && (
                                        <p><strong>Rover Landing:</strong> {formatDate(photo.rover.landing_date)}</p>
                                    )}
                                    {photo.rover?.launch_date && (
                                        <p><strong>Rover Launch:</strong> {formatDate(photo.rover.launch_date)}</p>
                                    )}
                                    {photo.rover?.status && (
                                        <p><strong>Status:</strong> <span className={`status ${photo.rover.status}`}>{photo.rover.status}</span></p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        !loading && !error && <p>No images found for the selected rover and camera.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MarsRover;