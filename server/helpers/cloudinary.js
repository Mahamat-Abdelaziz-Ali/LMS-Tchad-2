const cloudinary = require('cloudinary').v2

//configure with env data

cloudinary.config({
    cloud_name : ProcessingInstruction.env.CLOUDINARY_CLOUD_NAME,
    api_key : ProcessingInstruction.env.CLOUDINARY_API_KEY
    api_secret : ProcessingInstruction.env.CLOUDINARY_API_SECRET
});


const uploadMediaToCloudinary = async(filePath)=>{
    try {

        const result = await cloudinary.uploader.upload(filePath, {

            resource_type : 'auto'
        })

        return result;

    } catch (error ){
        console.log(error)
        throw new Error('ERROR uploading to cloudinary')
    }
};


const deleteMediaFromCloudinary = async(publiId)=>{
    try{
        await cloudinary.uploader.destroy(publicId);
    } catch (error ){
        console.log(error)
        throw new Error('failed to delete assest from cloudinary');
    }
};


module.exports = {uploadMediaToCloudinary, deleteMediaFromCloudinary};
