import { Webhook } from "svix";
import User from "../models/User.js";

//API Controller func to manage clerk user woth DB
export const clerkWebhooks = async (req,res)=>{
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOKS_SECRET)

    await whook.verify(JSON.stringify(req.body),{
       "svix-id": req.headers["svix-id"],
       "svix-timestamp": req.headers["svix-timestamp"],
       "svix-signature": req.headers["svix-signature"]
    })

    const {data, type} = req.body

      switch (type) {
        case 'user.created':
                {
                    const userData ={
                        _id: data.id,
                        email: data.email_addresses[0].email_address,
                        name: data.first_name+ " " + data.last_name,
                        imageUrl: data.Image_url, 
                    
                    }
                    await User.create(userData)
                    res.JSON({})
                    break;
                }            
            case 'user.updates':{
                const userData ={
                        email: data.email_address[0].email_address,
                        name: data.first_name+ " " + data.last_name,
                        imageUrl: data.Image_url, 
                    
                    }
                    await User.findByIdAndUpdate(data.id, userData)
                    req.json({})
            }


            case 'user.deleted' :{
                await User.findByIdAndDelete(data.id)
                res.json({})
                break;
            }
      
        default:
            break;
      }

  } catch (error) {
    res.json({success: false, message: error.message})
  }
}