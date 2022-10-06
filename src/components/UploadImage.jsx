import React, { useState } from 'react';
import { supabase } from '../supabase';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState();
  const [category, setCategory] = useState();
  const [avatarUrl, setAvatarUrl] = useState('');
  // const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      const { data, error } = await supabase.storage.from('avatars').upload(`${Date.now()}_${image.name}`, image);

      if (error) {
        console.log(error);
      }

      if (data) {
        setAvatarUrl(data.Key);
      }
    }
  };

  return (
    <div>
      {/* {message && message} */}

      <h1>Profile</h1>

      {avatarUrl ? <img src={`https://rmzhnvojmpqewraookpz.supabase.in/storage/v1/object/public/${avatarUrl}`} width={200} alt="" /> : 'No Avatar set'}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="product-img">Cargar Imagen</label>
          <input
            type="file"
            accept="image/jpeg image/png"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Descuento:</label>
          <input
            type="text"
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoria:</label>
          <input
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>

        <div className="form-group">
          <button type="submit">Save profile!</button>
        </div>

      </form>
    </div>
  );
};

export default UploadImage;
