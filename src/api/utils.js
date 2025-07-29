import axios from "axios";

//uplode image and retant image url 

export const imageUpload = async imageData => {
     const imageFromData = new FormData();
    imageFromData.append("image", imageData);

    //upload image in imgbb server using post requst 
        const { data } = await axios.post(
          `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_IMGBB_API_KEY
          }`,
          imageFromData
        );
    
        return data?.data?.display_url;
}