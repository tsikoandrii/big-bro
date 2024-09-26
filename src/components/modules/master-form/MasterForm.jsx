import {useForm} from "react-hook-form";
import React, {useState} from "react";
import ImageUploader from "components/elements/image-uploader/ImageUploader.jsx";
import {useQuery} from "react-query";
import {getMaster} from "@/api/masters.js";

const MasterForm = ({ title, onCreate, onUpdate, onDelete, masterId }) => {

    const getMasterName = async () => {
        if (masterId) {
            const data = await getMaster(masterId)
            return {
                name: data?.data?.data?.attributes?.name
            }
        } else {
            return {
                name: ""
            }
        }
    }

    const { register, handleSubmit } = useForm({
        defaultValues: async () => await getMasterName()
    })

    const [image, setImage] = useState(null)

    const onSubmit = (data, action) => {
        if (action === 'create') {
            if (image) onCreate({name: data.name, avatar: image})
        }
        if (action === 'delete') {
            onDelete()
        }
        if (action === 'update') {
            onUpdate({name: data.name, avatar: image, id: masterId})
        }
    }

    return (
        <form className="appointment-form">
            <div className="appointment-form-title">{title}</div>
            <input {...register('name', { required: true })} type="text" className="default-input" placeholder="Ім’я"/>
            <ImageUploader onChange={setImage} value={image} text="ЗАВАНТАЖТЕ АВАТАР" />
            {
                onCreate && <button
                    onClick={handleSubmit((data) => onSubmit(data, 'create'))}
                    className="accent-button"
                >
                    ДОДАТИ</button>
            }
            {
                onUpdate && <button onClick={handleSubmit((data) => onSubmit(data, 'update'))} data-action="update" className="accent-button">ЗБЕРЕГТИ</button>
            }
            {
                onDelete && <button onClick={handleSubmit((data) => onSubmit(data, 'delete'))} className="accent-button accent-button--red">ВИДАЛИТИ</button>
            }
        </form>
    );
};

export default MasterForm;