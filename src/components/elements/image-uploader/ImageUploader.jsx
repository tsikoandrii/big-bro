import React, { useState } from "react";
import './index.scss'

const ImageUploader = ({ value, onChange, text }) => {

    return (
        <div className="image-uploader">
            <label className="image-uploader-label">
                <img
                    className="image-uploader-preview"
                    src={value ? URL.createObjectURL(value) : ""}
                />
                {text}
                <input
                    type="file"
                    onChange={(event) => onChange(event.target.files[0])}
                />
            </label>
        </div>
    );
};

export default ImageUploader;