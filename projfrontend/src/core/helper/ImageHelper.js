import React from 'react'
import { API } from '../../backend';

 const ImageHelper = ({product}) => {
    const imageUrl = product ? `${API}/product/photo/${product._id}` : `https://media.istockphoto.com/vectors/error-like-laptop-with-dead-emoji-cartoon-flat-minimal-trend-modern-vector-id1011988208?k=6&m=1011988208&s=612x612&w=0&h=6l7ZtOJxcQ_xTThiNX_X0XWKRDx9rKZzgjSePb0XmtQ=`
    return (
        <div className="rounded border border-success p-2">
          <img
            src={imageUrl}
            alt="photo"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="mb-3 rounded"
          />
        </div>
    )
}

export default ImageHelper;
